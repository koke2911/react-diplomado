
export function TrackList({ tracks, onPlay, onToggleFavorite, favorites }) {
  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {tracks.map((track) => {
        const isFav = favorites.find((t) => t.id === track.id);
        return (
          <div key={track.id} className="bg-neutral-800 p-4 rounded shadow-md">
            <img src={track.album.cover_medium} alt={track.title} className="rounded mb-2" />
            <h3 className="text-lg">{track.title}</h3>
            <p className="text-sm text-neutral-400">{track.artist.name}</p>
            <div className="mt-2 flex gap-2">
              <button onClick={() => onPlay(track)} className="bg-green-500 px-3 py-1 rounded text-white">Play</button>
              <button onClick={() => onToggleFavorite(track)} className="bg-yellow-500 px-3 py-1 rounded text-white">
                {isFav ? "★" : "☆"}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
