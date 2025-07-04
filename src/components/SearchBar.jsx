function SearchBar({ onSearch }) {
  return (
    <input
      className="search-input"
      type="text"
      placeholder="Buscar artista o canción..."
      onChange={(e) => onSearch(e.target.value)}
    />
  );
}

export default SearchBar;
