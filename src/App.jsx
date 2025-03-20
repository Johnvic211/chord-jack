import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/app/Header";
import Footer from "./components/app/Footer";
import SongPage from "./components/song/SongPage";
import Playlist from "./components/playlist/PlaylistManager";
import PlaylistSongManager from "./components/playlist/PlaylistSongManager";
import PlaylistSong from "./components/playlist/PlaylistSong";
import { Navigate } from "react-router-dom";

const App = () => {
	return (
		<Router>
			<div className="dark:bg-gray-800 bg-gray-100 flex flex-col min-h-screen">
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
