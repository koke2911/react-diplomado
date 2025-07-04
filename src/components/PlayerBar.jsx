
export function PlayerBar({ track }) {
  return (
    <div className="bg-neutral-800 p-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <img src={track.album.cover_small} alt={track.title} className="w-12 h-12 rounded" />
        <div>
          <h4 className="text-white text-sm">{track.title}</h4>
          <p className="text-neutral-400 text-xs">{track.artist.name}</p>
        </div>
      </div>
      <audio controls autoPlay src={track.preview} className="w-1/2" />
    </div>
  );
}
