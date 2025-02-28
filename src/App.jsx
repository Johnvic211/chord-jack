import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SongPage from "./components/SongPage";
import Playlist from "./components/PlaylistManager";
import PlaylistSongManager from "./components/PlaylistSongManager";
import PlaylistSong from "./components/PlaylistSong";
import { Navigate } from "react-router-dom";

const App = () => {
	return (
		<Router>
			<div className="bg-gray-100 flex flex-col min-h-screen">
				<div className="flex-grow">
					<Header />

					<Routes>
						{/* Song Page with Dynamic Song Title */}
						<Route path="" element={<Navigate to="/song" replace />} />
						<Route path="/song" element={<SongPage />} />
						<Route path="/song/:title" element={<SongPage />} />
						<Route path="/playlist" element={<Playlist />} />
						<Route path="/playlist/:playlistName" element={<PlaylistSongManager />} />
						<Route path="/playlist/:playlistName/:title" element={<PlaylistSong />} />
					</Routes>
				</div>
				<Footer />
			</div>
		</Router>
	);
};

export default App;
