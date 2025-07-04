import { useState } from 'react';
import Home from './pages/Home';
import TrackDetail from './components/TrackDetail';
import { MusicProvider } from './context/MusicContext';
import Favorites from './pages/Favorites';

function App() {
  const [selectedTrack, setSelectedTrack] = useState(null);

  return (
    <MusicProvider>
      {selectedTrack ? (
        <TrackDetail track={selectedTrack} onBack={() => setSelectedTrack(null)} />
      ) : (
        <Home onSelectTrack={setSelectedTrack} />
      )}
    
    </MusicProvider>
  );
}




export default App;
