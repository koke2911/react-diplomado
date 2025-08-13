import { useEffect, useState } from 'react';
import { useMusic } from '../context/MusicContext';
import TrackCard from '../components/TrackCard';

function Favorites({ onBack, onSelectTrack }) {
  const { favorites, toggleFavorite } = useMusic();
  const [tracks, setTracks] = useState([]);

  return (
    <div className="app-container">
      <button className="back-button" onClick={onBack}>← Volver</button>
      <h2>Mis Favoritos</h2>
      <div className="track-grid">
        {favorites.length > 0 ? (
          favorites.map((track, index) => (
            <TrackCard
              key={track.id}
              title={track.title}
              artist={track.artist.name}
              cover={track.album.cover_medium}
              preview={track.preview}
              onClick={() => onSelectTrack(track, index, favorites)}

              isFavorite={true}
              onToggleFavorite={() => toggleFavorite(track)}
            />
          ))
        ) : (
          <p style={{ textAlign: 'center', color: '#999' }}>
            Aún no tienes canciones favoritas.
          </p>
        )}
      </div>
    </div>
  );
}

export default Favorites;
