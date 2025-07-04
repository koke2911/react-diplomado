import { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar';
import TrackCard from '../components/TrackCard';
import { useMusic } from '../context/MusicContext';

function Home({ onSelectTrack }) {
  const [query, setQuery] = useState('avicii');
  const [tracks, setTracks] = useState([]);
  const { favorites, toggleFavorite } = useMusic();

  useEffect(() => {
    if (!query) return;

    const url = `https://thingproxy.freeboard.io/fetch/https://api.deezer.com/search?q=${encodeURIComponent(query)}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setTracks(data.data || []))
      .catch((err) => console.error('Error al obtener canciones:', err));
  }, [query]);

  return (
    <div className="app-container">
      <h1 className="title">🎧 Reproductor tipo Spotify (30 segundos)</h1>
      <SearchBar onSearch={setQuery} />
      <div className="track-grid">
        {tracks.map((track) => (
          <TrackCard
            key={track.id}
            title={track.title}
            artist={track.artist.name}
            cover={track.album.cover_medium}
            preview={track.preview}
            onClick={() => onSelectTrack(track)}
            isFavorite={favorites.some((f) => f.id === track.id)}
            onToggleFavorite={() => toggleFavorite(track)}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
