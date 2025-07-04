import { useEffect, useState } from 'react';

function AlbumView({ album, onBack }) {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    const url = `https://thingproxy.freeboard.io/fetch/${album.tracklist}`;
    fetch(url)
      .then(res => res.json())
      .then(data => setTracks(data.data || []));
  }, [album]);

  return (
    <div>
      <button className="back-button" onClick={onBack}>← Volver</button>
      <h2>{album.title}</h2>
      <img src={album.cover_big} alt={album.title} className="detail-cover" />
      <ul className="album-list">
        {tracks.map(track => (
          <li key={track.id} className="album-track">
            {track.title}
            <audio controls src={track.preview} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AlbumView;
