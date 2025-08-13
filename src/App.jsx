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
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [userInteracted, setUserInteracted] = useState(false); // flag de interacción

  const audioRef = useRef(null);

  // Función para reproducir audio, solo autoplay si hubo interacción del usuario
  const playAudio = () => {
    if (!audioRef.current) return;
    audioRef.current.pause();
    audioRef.current.load();
    if (userInteracted) {
      audioRef.current.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
    }
  };

  const handleSelectTrack = (track, index, list) => {
    setSelectedTrack(track);
    setTrackList(list || []);
    setCurrentIndex(index);

    setCurrentTime(0);
    setDuration(0);

    setIsPlaying(false); // <--- reinicia el botón a play
    playAudio();
  };

  const goToPrevious = () => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setSelectedTrack(trackList[newIndex]);
      setCurrentIndex(newIndex);

      setCurrentTime(0);
      setDuration(0);

      playAudio();
    }
  };

  const goToNext = () => {
    if (currentIndex < trackList.length - 1) {
      const newIndex = currentIndex + 1;
      setSelectedTrack(trackList[newIndex]);
      setCurrentIndex(newIndex);

      setCurrentTime(0);
      setDuration(0);

      playAudio();
    }
  };

  const togglePlayPause = () => {
    if (!audioRef.current) return;

    if (!userInteracted) setUserInteracted(true); // primera interacción del usuario

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const formatTime = (seconds) => {
    if (!seconds) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);

    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);

    return () => {
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
    };
  }, [selectedTrack]);

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
              <Home onSelectTrack={handleSelectTrack} />
            </>
          ) : (
            <Favorites
              onBack={() => setShowFavorites(false)}
              onSelectTrack={(track, index) => handleSelectTrack(track, index, favorites)}
            />
          )}
        </div>

        <div className={`track-detail-wrapper ${selectedTrack ? 'visible' : 'hidden'}`}>
          {selectedTrack && <TrackDetail track={selectedTrack} onBack={() => setSelectedTrack(null)} />}
        </div>
      </div>

      {selectedTrack && (
        <div className="bottom-player-bar">
          <audio ref={audioRef} src={selectedTrack.preview} />

          <div className="custom-progress-bar">
            <span>{formatTime(currentTime)}</span>
            <input
              type="range"
              min="0"
              max={duration || 0}
              value={currentTime}
              onChange={(e) => {
                const newTime = Number(e.target.value);
                audioRef.current.currentTime = newTime;
                setCurrentTime(newTime);
              }}
            />
            <span>{formatTime(duration)}</span>
          <button className="player-button" onClick={() => toggleFavorite(selectedTrack)}>
            {favorites.some((f) => f.id === selectedTrack.id) ? '💚' : '🤍'}
          </button>
          </div>

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
