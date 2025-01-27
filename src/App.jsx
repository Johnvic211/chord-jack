import { useState } from "react";
import SongTransposer from "./Components/SongTransposer";
import SongSelector from "./Components/SongSelector";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import songBank from './songBank'; // Import your songBank

const App = () => {
  const [selectedSong, setSelectedSong] = useState(songBank[3]); // Default to first song

  return (
    <div className="bg-gray-100 flex flex-col min-h-screen">
      <div className="flex-grow">
        {/* Header */}
        <Header />

        {/* Song Selector */}
        <SongSelector songBank={songBank} onSongSelect={setSelectedSong} />

        {/* Song Transposer */}
        <SongTransposer selectedSong={selectedSong} />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
