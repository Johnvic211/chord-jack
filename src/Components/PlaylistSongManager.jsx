import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Plus, Trash2, Music, ChevronUp, ChevronDown, Download } from "lucide-react";
import Select from "react-select";
import Swal from "sweetalert2";
import songBank from "../data/songBank";

const PlaylistSongManager = () => {
    const { playlistName } = useParams();
    const navigate = useNavigate();
    const [playlists, setPlaylists] = useState([]);
    const [songs, setSongs] = useState([]);
    const [selectedSong, setSelectedSong] = useState(null);
    const [showAddForm, setShowAddForm] = useState(false);

    useEffect(() => {
        const savedPlaylists = JSON.parse(localStorage.getItem("playlists")) || [];
        if (!Array.isArray(savedPlaylists)) {
            console.error("Invalid playlist data in localStorage:", savedPlaylists);
            setPlaylists([]);
            return;
        }
        const currentPlaylist = savedPlaylists.find((p) => p.name === playlistName) || { songs: [] };
        setPlaylists(savedPlaylists);
        setSongs(currentPlaylist.songs || []);
    }, [playlistName]);

    const songOptions = songBank.map((song) => ({
        value: song.title,
        label: song.title,
    }));

    const handleAddSong = () => {
        if (!selectedSong) {
            alert("Please select a song!");
            return;
        }

        const updatedPlaylists = playlists.map((playlist) =>
            playlist.name === playlistName
                ? { ...playlist, songs: [...playlist.songs, selectedSong.value] }
                : playlist
        );
        setPlaylists(updatedPlaylists);
        setSongs((prevSongs) => [...prevSongs, selectedSong.value]);
        localStorage.setItem("playlists", JSON.stringify(updatedPlaylists));
        setSelectedSong(null);
        setShowAddForm(false);
    };

    const removeSong = (index) => {
        Swal.fire({
            title: "Remove this song?",
            text: "This action cannot be undone.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, remove it",
            cancelButtonText: "No, keep it",
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            background: "#fff",
            color: "#000",
        }).then((result) => {
            if (result.isConfirmed) {
                const updatedSongs = songs.filter((_, i) => i !== index);
                const updatedPlaylists = playlists.map((playlist) =>
                    playlist.name === playlistName
                        ? { ...playlist, songs: updatedSongs }
                        : playlist
                );
                setSongs(updatedSongs);
                setPlaylists(updatedPlaylists);
                localStorage.setItem("playlists", JSON.stringify(updatedPlaylists));

                Swal.fire({
                    title: "Removed!",
                    text: "The song has been removed from the playlist.",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 1500,
                    background: "#fff",
                    color: "#000",
                });
            }
        });
    };

    const moveSongUp = (index) => {
        if (index === 0) return;
        const updatedSongs = [...songs];
        const [songToMove] = updatedSongs.splice(index, 1);
        updatedSongs.splice(index - 1, 0, songToMove);

        const updatedPlaylists = playlists.map((playlist) =>
            playlist.name === playlistName ? { ...playlist, songs: updatedSongs } : playlist
        );

        setSongs(updatedSongs);
        setPlaylists(updatedPlaylists);
        localStorage.setItem("playlists", JSON.stringify(updatedPlaylists));
    };

    const moveSongDown = (index) => {
        if (index === songs.length - 1) return;
        const updatedSongs = [...songs];
        const [songToMove] = updatedSongs.splice(index, 1);
        updatedSongs.splice(index + 1, 0, songToMove);

        const updatedPlaylists = playlists.map((playlist) =>
            playlist.name === playlistName ? { ...playlist, songs: updatedSongs } : playlist
        );

        setSongs(updatedSongs);
        setPlaylists(updatedPlaylists);
        localStorage.setItem("playlists", JSON.stringify(updatedPlaylists));
    };

    const handleSongClick = (songTitle) => {
        // Navigate to song page with URL: /song-chords/playlist/PlaylistName/SongName
        navigate(`/song-chords/playlist/${encodeURIComponent(playlistName)}/${encodeURIComponent(songTitle)}`);
    };

    const exportPlaylists = () => {
        const allPlaylists = JSON.parse(localStorage.getItem("playlists")) || [];
        let exportData = {};
    
        if (playlistName) {
            // Export only the current playlist
            const currentPlaylist = allPlaylists.find((p) => p.name === playlistName);
            if (!currentPlaylist) {
                Swal.fire("Error", "Playlist not found.", "error");
                return;
            }
    
            // Export song settings for this playlist
            const songSettings = {};
            currentPlaylist.songs.forEach((song) => {
                const key = `${playlistName}_song_settings_${song}`;
                songSettings[key] = JSON.parse(localStorage.getItem(key)) || null;
            });
    
            exportData = {
                playlists: [currentPlaylist], // Only export this playlist
                songSettings,
            };
        } else {
            // Export all playlists and song settings
            const songSettings = {};
            allPlaylists.forEach((playlist) => {
                playlist.songs.forEach((song) => {
                    const key = `${playlist.name}_song_settings_${song}`;
                    songSettings[key] = JSON.parse(localStorage.getItem(key)) || null;
                });
            });
    
            exportData = {
                playlists: allPlaylists,
                songSettings,
            };
        }
    
        const jsonData = JSON.stringify(exportData, null, 2);
        const blob = new Blob([jsonData], { type: "application/json" });
        const url = URL.createObjectURL(blob);
    
        const a = document.createElement("a");
        a.href = url;
        a.download = playlistName ? `${playlistName}.json` : "playlists.json";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };
    
    
    return (
        <div className="m-4 px-2 min-w-[350px] max-w-[600px] mx-auto">
            {/* Header */}
            <div className="flex items-center justify-between p-4 bg-white rounded-md shadow-md">
                <ArrowLeft
                    className="cursor-pointer text-black hover:text-gray-400 transition"
                    onClick={() => navigate(`/song-chords/playlist`)}
                />
                <h3 className="text-lg font-semibold text-black">{String(playlistName)}</h3>

                {/* Buttons aligned to the right */}
                <div className="flex items-center gap-4">
                    {/* Export Button */}
                    <button onClick={exportPlaylists} className="relative cursor-pointer text-[#1DB954] group">
                        <Download size={20} />
                        <span className="absolute top-full left-1/2 transform -translate-x-1/2 mb-2 text-xs bg-gray-800 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                            Export Playlists
                        </span>
                    </button>

                    {/* Add Song Button */}
                    <button onClick={() => setShowAddForm(!showAddForm)} className="relative cursor-pointer text-[#1DB954] group">
                        <Plus size={20} />
                        <span className="absolute top-full left-1/2 transform -translate-x-1/2 mb-2 text-xs bg-gray-800 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                            Add Song
                        </span>
                    </button>
                </div>
            </div>


            {/* Add Song Form */}
            {showAddForm && (
                <div className="mt-4 flex items-center gap-2">
                    <Select
                        options={songOptions}
                        onChange={(option) => setSelectedSong(option)}
                        value={selectedSong}
                        placeholder="Search song..."
                        className="flex-1 text-black"
                        classNamePrefix="react-select"
                        styles={{
                            control: (base) => ({ ...base, minHeight: "38px" }),
                        }}
                        autoFocus
                        isSearchable
                    />
                    <button
                        onClick={handleAddSong}
                        className="px-4 py-2 bg-[#1DB954] text-white rounded-md hover:bg-green-600 transition"
                    >
                        Add
                    </button>
                </div>
            )}

            {/* Song List */}
            {songs.length > 0 ? (
                <table className="mt-4 w-full border-collapse bg-white rounded-lg shadow-md overflow-hidden">
                    <tbody>
                    {songs.map((song, index) => {
                        const selectedSong = songBank.find(
                            (s) => s.title.toLowerCase() === decodeURIComponent(song || "").toLowerCase()
                        );

                        return (
                            <tr key={index} className="hover:bg-gray-50 transition-colors">
                                <td className="px-4 py-2 text-black w-12 text-center font-medium">
                                    {index + 1}
                                </td>
                                <td 
                                    className="px-4 py-2 text-black cursor-pointer" 
                                    onClick={() => handleSongClick(song)}
                                >
                                    <div className="flex items-center gap-3">
                                        <Music size={18} className="text-[#1DB954] flex-shrink-0" />
                                        <div className="flex flex-col">
                                            <span>{song}</span>
                                            <span className="text-sm text-gray-500">
                                                { "By " + selectedSong?.artist || ""}
                                            </span>
                                        </div>
                                    </div>
                                </td>

                                <td className="px-4 py-2 w-24 text-center">
                                    <div className="flex items-center justify-center gap-2">
                                        <button
                                            onClick={() => moveSongUp(index)}
                                            disabled={index === 0}
                                            className={`p-1 rounded-full ${
                                                index === 0
                                                    ? "text-gray-300 cursor-not-allowed"
                                                    : "text-gray-600 hover:text-gray-800 hover:bg-gray-200 cursor-pointer"
                                            } transition-colors`}
                                        >
                                            <ChevronUp size={18} />
                                        </button>
                                        <button
                                            onClick={() => moveSongDown(index)}
                                            disabled={index === songs.length - 1}
                                            className={`p-1 rounded-full ${
                                                index === songs.length - 1
                                                    ? "text-gray-300 cursor-not-allowed"
                                                    : "text-gray-600 hover:text-gray-800 hover:bg-gray-200 cursor-pointer"
                                            } transition-colors`}
                                        >
                                            <ChevronDown size={18} />
                                        </button>
                                        <button
                                            onClick={() => removeSong(index)}
                                            className="p-1 rounded-full text-red-500 hover:text-red-700 hover:bg-red-100 transition-colors cursor-pointer"
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        );
                    })}

                    </tbody>
                </table>
            ) : (
                <p className="mt-4 text-gray-500 text-center">No songs in this playlist. Add one!</p>
            )}
        </div>
    );
};

export default PlaylistSongManager;