import { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar';
import TrackCard from '../components/TrackCard';
import { useMusic } from '../context/MusicContext';

function Home({ onSelectTrack }) {
  const [query, setQuery] = useState('music');
  const [total, setTotal] = useState(0);
  const [pages, setPages] = useState(1);
  const [indice, setIndice] = useState(0);
  const [tracks, setTracks] = useState([]);
  const { favorites, toggleFavorite } = useMusic();

  useEffect(() => {
    if (!query) return;

//    const url = `https://thingproxy.freeboard.io/fetch/https://api.deezer.com/search?q=${encodeURIComponent(query)}&index=${indice}`;
    //const url = `https://api.allorigins.win/raw?url=${encodeURIComponent(`https://api.deezer.com/search?q=${query}&index=${indice}`)}`;
//    const url = `https://api.deezer.com/search?q=${encodeURIComponent(query)}&index=${indice}`;
    const url = `/deezer/search?q=${encodeURIComponent(query)}&index=${indice}`;



    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setTracks(data.data || []);
        setTotal(data.total);
        setPages(Math.floor(indice / 25) + 1);
      })
      .catch((err) => console.error('Error al obtener canciones:', err));
  }, [query, indice]);

  return (
    <div className="app-container">
      <h1 className="title">🎧 Reproductor Music</h1>
      <SearchBar onSearch={setQuery} />
      <div style={{ textAlign: 'center' }}>
          {total} canciones <br />
        Página {pages} de {Math.ceil(total / 25)}<br />
        <button className="boton" onClick={() => {
          if (indice >= 25) {
            setIndice(indice - 25);
          }
        }}>
          Anterior
        </button>
        <button className="boton" onClick={() => {
          if (indice + 25 < total) {
            setIndice(indice + 25);
          }
        }}>
          Siguiente
        </button>
      </div>
      <div className="track-grid">
        {tracks.map((track, index) => (
          <TrackCard
            key={track.id}
            title={track.title}
            artist={track.artist.name}
            cover={track.album.cover_medium}
            preview={track.preview}
            onClick={() => onSelectTrack(track, index, tracks)} 
            isFavorite={favorites.some((f) => f.id === track.id)}
            onToggleFavorite={() => toggleFavorite(track)}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
