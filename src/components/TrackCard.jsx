function TrackCard({ title, artist, cover, preview, onClick, isFavorite, onToggleFavorite }) {
  return (
    <div className="track-card" onClick={onClick}>
      <img src={cover} alt={title} className="track-cover" />
      <h2 className="track-title">{title}</h2>
      <p className="track-artist">🎤 {artist}</p>
      <button onClick={(e) => { e.stopPropagation(); onToggleFavorite(); }}>
        {isFavorite ? '💚' : '🤍'}
      </button>
      <audio controls src={preview} className="track-audio" />
    </div>
  );
}

export default TrackCard;
