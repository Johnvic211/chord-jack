import { useState, useEffect } from "react";
import SongTransposer from "./Components/SongTransposer";
import SongSelector from "./Components/SongSelector";
import MusicInformation from "./Components/MusicInformation";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import songBank from './songBank'; // Import your songBank

const App = () => {
  // Check if there's a stored song in localStorage, or default to the first song
  const lastSelectedSong = localStorage.getItem('selectedSong');
  const defaultSong = lastSelectedSong ? JSON.parse(lastSelectedSong) : songBank[5];

  const [selectedSong, setSelectedSong] = useState(defaultSong);

  // Save the selected song to localStorage whenever it changes
  useEffect(() => {
    if (selectedSong) {
      localStorage.setItem('selectedSong', JSON.stringify(selectedSong));
    }
  }, [selectedSong]);

  return (
    <div className="bg-gray-100 flex flex-col min-h-screen">
      <div className="flex-grow">
        {/* Header */}
        <Header />

        {/* Song Selector */}
        <SongSelector songBank={songBank} onSongSelect={setSelectedSong} />

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
