import { useState, useEffect } from "react";
import SongTransposer from "./Components/SongTransposer";
import SongSelector from "./Components/SongSelector";
import MusicInformation from "./Components/MusicInformation";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import songBank from './songBank'; // Import your songBank

const App = () => {
  // Retrieve the last selected song index from localStorage or default to index 5
  const lastSelectedIndex = localStorage.getItem('selectedSongIndex');
  const defaultIndex = lastSelectedIndex !== null ? parseInt(lastSelectedIndex, 10) : 5;

  const [selectedSongIndex, setSelectedSongIndex] = useState(defaultIndex);
  const selectedSong = songBank[selectedSongIndex]; // Get the song from the array

  // Save the selected song index to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('selectedSongIndex', selectedSongIndex);
  }, [selectedSongIndex]);

  return (
    <div className="bg-gray-100 flex flex-col min-h-screen">
      <div className="flex-grow">
        {/* Header */}
        <Header />

        {/* Song Selector */}
        <SongSelector 
          songBank={songBank} 
          onSongSelect={(index) => setSelectedSongIndex(index)} 
        />

        {selectedSong && (
          <>
            {/* Song Transposer */}
            <SongTransposer selectedSong={selectedSong} />

            {/* Music Information */}
            <MusicInformation selectedSong={selectedSong} />
          </>
        )}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};


export default App 
