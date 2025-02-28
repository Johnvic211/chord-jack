import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import songBank from "../data/songBank";
import SongTransposer from "./SongTransposer";
import MusicInformation from "./MusicInformation";

const PlaylistSong = () => {
    const { playlistName, title } = useParams();
    const navigate = useNavigate();
    const [selectedSong, setSelectedSong] = useState(null);
    const [playlistSongs, setPlaylistSongs] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(-1);
    const [swipeOffset, setSwipeOffset] = useState(0);
    const [touchStartX, setTouchStartX] = useState(null);
    const swipeThreshold = 50; // Minimum swipe distance

    useEffect(() => {
        const savedPlaylists = JSON.parse(localStorage.getItem("playlists")) || [];
        const currentPlaylist = savedPlaylists.find((p) => p.name === playlistName) || { songs: [] };
        setPlaylistSongs(currentPlaylist.songs || []);

        const songIndex = currentPlaylist.songs.findIndex(
            (songTitle) => songTitle.toLowerCase() === decodeURIComponent(title || "").toLowerCase()
        );
        setCurrentIndex(songIndex);

        const song = songBank.find(
            (song) => song.title.toLowerCase() === decodeURIComponent(title || "").toLowerCase()
        );
        setSelectedSong(song);
    }, [playlistName, title]);

    const navigateToSong = (index) => {
        if (playlistSongs.length > 0) {
            setCurrentIndex(index);
            setSwipeOffset(0); // Reset animation
            navigate(`/song-chords/playlist/${encodeURIComponent(playlistName)}/${encodeURIComponent(playlistSongs[index])}`);
        }
    };

    // Handle touch/swipe gestures
    const handleTouchStart = (e) => setTouchStartX(e.touches[0].clientX);
    const handleTouchMove = (e) => {
        if (touchStartX !== null) {
            setSwipeOffset(e.touches[0].clientX - touchStartX);
        }
    };
    const handleTouchEnd = () => {
        if (touchStartX !== null) {
            if (swipeOffset > swipeThreshold) {
                // Swipe Right (Previous Song or Loop to Last)
                const prevIndex = currentIndex > 0 ? currentIndex - 1 : playlistSongs.length - 1;
                navigateToSong(prevIndex);
            } else if (swipeOffset < -swipeThreshold) {
                // Swipe Left (Next Song or Loop to First)
                const nextIndex = currentIndex < playlistSongs.length - 1 ? currentIndex + 1 : 0;
                navigateToSong(nextIndex);
            }
        }
        setTouchStartX(null);
        setSwipeOffset(0); // Reset position smoothly
    };

    return (
        <div
            className="relative m-4 px-2 min-w-[350px] max-w-[600px] mx-auto overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            {/* Header */}
            <div className="flex items-center justify-between p-4 bg-white rounded-md shadow-md">
                <ArrowLeft
                    className="cursor-pointer text-black hover:text-gray-400 transition"
                    onClick={() => navigate(`/song-chords/playlist/${encodeURIComponent(playlistName)}`)} // Go back to the playlist
                />
                <h3 className="text-lg font-semibold text-black">
                    {selectedSong ? playlistName : "Loading..."}
                </h3>
                <div className="w-6" />
            </div>

            {/* Left & Right Navigation Arrows (Fixed Position) */}
            {playlistSongs.length > 1 && (
                <>
                <button
                    className="fixed left-4 top-1/2 transform -translate-y-1/2 bg-transparent p-2 rounded-full shadow-md hover:bg-gray-200 transition z-10"
                    onClick={() => navigateToSong(currentIndex > 0 ? currentIndex - 1 : playlistSongs.length - 1)}
                >
                    <ChevronLeft className="w-6 h-6 text-gray-700" />
                </button>
            
                <button
                    className="fixed right-4 top-1/2 transform -translate-y-1/2 bg-transparent p-2 rounded-full shadow-md hover:bg-gray-200 transition z-10"
                    onClick={() => navigateToSong(currentIndex < playlistSongs.length - 1 ? currentIndex + 1 : 0)}
                >
                    <ChevronRight className="w-6 h-6 text-gray-700" />
                </button>
            </>
            
            )}

            {/* Song Content with Swipe Animation */}
            <div
                className="transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(${swipeOffset}px)` }}
            >
                {selectedSong ? (
                    <>
                        <SongTransposer selectedSong={selectedSong} page={playlistName} />
                        <MusicInformation selectedSong={selectedSong} />
                    </>
                ) : (
                    <p className="mt-4 text-gray-500 text-center">Song not found.</p>
                )}
            </div>
        </div>
    );
};

export default PlaylistSong;
