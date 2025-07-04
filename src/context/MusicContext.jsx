import { createContext, useContext, useState } from 'react';

const MusicContext = createContext();

export function MusicProvider({ children }) {
  const [favorites, setFavorites] = useState([]);
  const [playlists, setPlaylists] = useState([]);

  const toggleFavorite = (track) => {
    setFavorites((prev) =>
      prev.some((t) => t.id === track.id)
        ? prev.filter((t) => t.id !== track.id)
        : [...prev, track]
    );
  };

  return (
    <MusicContext.Provider value={{ favorites, toggleFavorite, playlists, setPlaylists }}>
      {children}
    </MusicContext.Provider>
  );
}

export const useMusic = () => useContext(MusicContext);
