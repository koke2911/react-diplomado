function TrackDetail({ track, onBack }) {
  return (
    <div className="track-detail-container">
      <button className="back-button" onClick={onBack}>← Volver</button>
      <div className="track-detail">
        <img src={track.album.cover_big} alt={track.title} className="detail-cover" />
        <h2>{track.title}</h2>
        <p>🎤 {track.artist.name}</p>
        <audio controls src={track.preview} autoPlay className="detail-audio" />
        <p className="disclaimer">🎧 Esta demo solo permite escuchar 30 segundos por canción</p>
      </div>
    </div>
  );
}

export default TrackDetail;
