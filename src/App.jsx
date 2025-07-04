import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-800 via-indigo-600 to-blue-500 flex flex-col items-center justify-center text-white p-10 space-y-10">
      <div className="flex gap-10 animate-bounce">
        <img src={viteLogo} className="h-20 hover:scale-125 transition-transform duration-300" alt="Vite" />
        <img src={reactLogo} className="h-20 hover:rotate-180 transition-transform duration-500" alt="React" />
      </div>

      <h1 className="text-6xl font-black uppercase tracking-widest text-yellow-300 drop-shadow-lg">
        Tailwind Activo 🔥
      </h1>

      <div className="bg-white text-gray-800 rounded-3xl shadow-2xl border-4 border-pink-400 p-8 w-full max-w-lg space-y-6 text-center">
        <p className="text-xl font-semibold">¡Contador mágico!</p>
        <button
          onClick={() => setCount(count + 1)}
          className="bg-pink-600 text-white px-8 py-3 text-lg rounded-full hover:bg-pink-400 transition-all duration-300 shadow-md hover:scale-105"
        >
          Count is {count}
        </button>
        <p className="text-sm">
          Edita <code className="bg-gray-200 p-1 rounded">src/App.jsx</code> y guarda para probar HMR
        </p>
      </div>

      <footer className="text-sm text-white opacity-70 pt-6">
        Click en los logos para aprender más ✨
      </footer>
    </div>
  )
}

export default App