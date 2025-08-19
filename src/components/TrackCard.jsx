function TrackCard({ title, artist, cover, preview, onClick, isFavorite, onToggleFavorite }) {
  return (
    <div className="track-card" onClick={onClick}>
      <div className="track-top">
        <img src={cover} alt={title} className="track-cover" />
        <div className="track-info">
          <h2 className="track-title">{title}</h2>
          <div className="track-subinfo">
            <p className="track-artist">🎤 {artist}</p>
            <button
              className="fav-button"
              onClick={(e) => {
                e.stopPropagation();
                onToggleFavorite();
              }}
            >
              {isFavorite ? '💚' : '🤍'}
            </button>
          </div>
        </div>
      </div>
      {/* <audio controls src={preview} className="track-audio" loop /> */}
    </div>
  );
}

export default TrackCard;
