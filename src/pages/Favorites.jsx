import { useMusic } from '../context/MusicContext';
import TrackCard from '../components/TrackCard';

function Favorites({ onBack }) {
  const { favorites, toggleFavorite } = useMusic();

  return (
    <div>
      <button className="back-button" onClick={onBack}>← Volver</button>
      <h2>Mis Favoritos</h2>
      <div className="track-grid">
        {favorites.map((track) => (
          <TrackCard
            key={track.id}
            title={track.title}
            artist={track.artist.name}
            cover={track.album.cover_medium}
            preview={track.preview}
            onClick={() => {}}
            isFavorite={true}
            onToggleFavorite={() => toggleFavorite(track)}
          />
        ))}
      </div>
    </div>
  );
}

export default Favorites;
