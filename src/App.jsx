import { useState, useRef, useEffect } from 'react';
import Home from './pages/Home';
import TrackDetail from './components/TrackDetail';
import Favorites from './pages/Favorites';
import { MusicProvider, useMusic } from './context/MusicContext';
import { FaArrowLeft, FaArrowRight, FaPlay, FaPause } from 'react-icons/fa';

function AppContent() {
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [showFavorites, setShowFavorites] = useState(false);
  const { favorites, toggleFavorite } = useMusic();
  const [trackList, setTrackList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  

  const audioRef = useRef(null);

  const handleSelectTrack = (track, index, list) => {
    setSelectedTrack(track);
    setTrackList(list || []);
    setCurrentIndex(index);

    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.load();
      if (isPlaying) {
        audioRef.current.play();
      }
    }
  };

  const togglePlayPause = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const goToPrevious = () => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      const prevTrack = trackList[newIndex];
      setSelectedTrack(prevTrack);
      setCurrentIndex(newIndex);

      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.load();
        if (isPlaying) audioRef.current.play();
      }
    }
  };

  const goToNext = () => {
    if (currentIndex < trackList.length - 1) {
      const newIndex = currentIndex + 1;
      const nextTrack = trackList[newIndex];
      setSelectedTrack(nextTrack);
      setCurrentIndex(newIndex);

      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.load();
        if (isPlaying) audioRef.current.play();
      }
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);

    return () => {
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
    };
  }, []);

  return (
    <div className="app-wrapper">
      <div className={`main-layout ${selectedTrack ? 'track-selected' : ''}`}>
        <div className="home-container">
          {!showFavorites ? (
            <>
              <div>
                <button className="boton" onClick={() => setShowFavorites(true)}>
                  💚 Ver Favoritos
                </button>
              </div>
              <Home
                onSelectTrack={(track, index, list) =>
                  handleSelectTrack(track, index, list)
                }
              />
            </>
          ) : (
            <Favorites
              onBack={() => setShowFavorites(false)}
              onSelectTrack={(track, index) =>
                handleSelectTrack(track, index, favorites)
              }
            />
          )}
        </div>

        <div className={`track-detail-wrapper ${selectedTrack ? 'visible' : 'hidden'}`}>
          {selectedTrack && (
            <TrackDetail track={selectedTrack} onBack={() => setSelectedTrack(null)} />
          )}
        </div>
      </div>

      {selectedTrack && (
        <div className="bottom-player-bar">
          <audio
            ref={audioRef}
            src={selectedTrack.preview}
            controls
            className="visible-audio-player"
          />

          <div className="player-buttons">
            <button className="spotify-button" onClick={goToPrevious}>
              <FaArrowLeft />
            </button>

            <button className="spotify-button" onClick={togglePlayPause}>
              {isPlaying ? <FaPause /> : <FaPlay />}
            </button>

            <button className="spotify-button" onClick={goToNext}>
              <FaArrowRight />
            </button>
            <button className="player-button" onClick={() => toggleFavorite(selectedTrack)}>
              {favorites.some((f) => f.id === selectedTrack.id) ? '💚' : '🤍'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <MusicProvider>
      <AppContent />
    </MusicProvider>
  );
}

export default App;
