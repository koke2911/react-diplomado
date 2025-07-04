
export function Sidebar() {
  return (
    <div className="w-60 bg-neutral-950 p-4 hidden md:block">
      <h2 className="text-xl font-bold text-white mb-4">Mi Música</h2>
      <ul className="space-y-2 text-neutral-300">
        <li className="hover:text-white cursor-pointer">Inicio</li>
        <li className="hover:text-white cursor-pointer">Favoritos</li>
      </ul>
    </div>
  );
}
