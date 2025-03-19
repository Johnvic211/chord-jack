import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Plus, Trash2, Music, Upload, Download } from "lucide-react";
import Swal from "sweetalert2";
import YouthServicePlaylist from "./../data/youth_service.json";

const PlaylistManager = () => {
    const [playlists, setPlaylists] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const savedPlaylists = JSON.parse(localStorage.getItem("playlists")) || [];
    
        // Convert old string playlists to object format
        const formattedPlaylists = savedPlaylists.map((playlist) => 
            typeof playlist === "string" ? { name: playlist, songs: [] } : playlist
        );
    
        setPlaylists(formattedPlaylists);
        localStorage.setItem("playlists", JSON.stringify(formattedPlaylists));
    }, []);
    
    const createPlaylistForm = () => {
        Swal.fire({
            title: "Give your playlist a name",
            input: "text",
            inputPlaceholder: "Enter playlist name",
            showCancelButton: true,
            confirmButtonText: "Save",
            cancelButtonText: "Cancel",
            confirmButtonColor: "#1DB954",
            inputValidator: (value) => {
                if (!value.trim()) {
                    return "Playlist name cannot be empty!";
                }
                if (playlists.some((playlist) => playlist.name.toLowerCase() === value.trim().toLowerCase())) {
                    return "A playlist with this name already exists!";
                }
            }
        }).then((result) => {
            if (result.isConfirmed) {
                const playlistName = result.value.trim();
                savePlaylist(playlistName);
            }
        });
    };
    
    const savePlaylist = (name) => {
        let updatedPlaylists = [...playlists, { name, songs: [] }];
        setPlaylists(updatedPlaylists);
        localStorage.setItem("playlists", JSON.stringify(updatedPlaylists));
    
        Swal.fire({
            icon: "success",
            title: "Saved!",
            text: `Playlist "${name}" has been added.`,
            showConfirmButton: false,
            timer: 2000,
            confirmButtonColor: "#1DB954"
        });
    };    

    const deletePlaylist = (index, playlistName) => {
        Swal.fire({
            title: "Delete playlist?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "Cancel",
            confirmButtonColor: "#E02424",
        }).then((result) => {
            if (result.isConfirmed) {
                let updatedPlaylists = [...playlists];
                updatedPlaylists.splice(index, 1);
                setPlaylists(updatedPlaylists);
                localStorage.setItem("playlists", JSON.stringify(updatedPlaylists));
                removeSongSettings(playlistName);
            }
        });
    };

    const removeSongSettings = (playlistName) => {
        Object.keys(localStorage).forEach((key) => {
            if (key.startsWith(playlistName + "_song_settings_")) {
                localStorage.removeItem(key);
            }
        });
    };
    

    const handlePlaylistClick = (name) => {
        navigate(`/playlist/${encodeURIComponent(name)}`);
    };

    const exportPlaylists = () => {
        const playlists = JSON.parse(localStorage.getItem("playlists")) || [];
    
        // Export song settings per playlist
        const songSettings = {};
        playlists.forEach((playlist) => {
            playlist.songs.forEach((song) => {
                const key = `${playlist.name}_song_settings_${song}`;
                songSettings[key] = JSON.parse(localStorage.getItem(key)) || null;
            });
        });
    
        const exportData = {
            playlists,
            songSettings,
        };
    
        const jsonData = JSON.stringify(exportData, null, 2);
        const blob = new Blob([jsonData], { type: "application/json" });
        const url = URL.createObjectURL(blob);
    
        const a = document.createElement("a");
        a.href = url;
        a.download = "playlists.json";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };
    
    const importPlaylists = (file, isManualImport = false) => {
        if (!file) {
            // Check if YouthServicePlaylist is already imported
            const isYouthServiceImported = playlists.some((p) =>
                YouthServicePlaylist.playlists.some((y) => p.name.toLowerCase() === y.name.toLowerCase())
            );

            if (isYouthServiceImported) return; // Don't import again if already present
        }

        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const importedData = file ? JSON.parse(e.target.result) : YouthServicePlaylist;
                const existingPlaylists = JSON.parse(localStorage.getItem("playlists")) || [];

                // Merge playlists (avoid duplicates)
                const newPlaylists = importedData.playlists.filter(
                    (importedPlaylist) =>
                        !existingPlaylists.some((p) => p.name.toLowerCase() === importedPlaylist.name.toLowerCase())
                );

                if (newPlaylists.length === 0) return; // If no new playlists, do nothing

                const mergedPlaylists = [...existingPlaylists, ...newPlaylists];
                localStorage.setItem("playlists", JSON.stringify(mergedPlaylists));
                setPlaylists(mergedPlaylists); // Update state

                // Merge song settings (only for new playlists)
                newPlaylists.forEach((playlist) => {
                    playlist.songs.forEach((song) => {
                        const key = `${playlist.name}_song_settings_${song}`;
                        if (!localStorage.getItem(key) && importedData.songSettings[key]) {
                            localStorage.setItem(key, JSON.stringify(importedData.songSettings[key]));
                        }
                    });
                });

                // Show Swal alert only for manual imports
                if (isManualImport) {
                    Swal.fire({
                        icon: "success",
                        title: "Import Successful!",
                        text: `${newPlaylists.length} new playlists imported.`,
                        showConfirmButton: false,
                        timer: 2000,
                    });
                }
            } catch {
                Swal.fire({
                    icon: "error",
                    title: "Import Failed!",
                    text: "Invalid file format.",
                });
            }
        };

        if (file) {
            reader.readAsText(file);
        } else {
            // If using YouthServicePlaylist directly, simulate file read
            reader.onload({ target: { result: JSON.stringify(YouthServicePlaylist) } });
        }
    };

    useEffect(() => {
        importPlaylists(); // Import YouthServicePlaylist only once when the component mounts (without alert)
    }, []);
    
    return (
        <div className="m-4 px-2 min-w-[350px] max-w-[600px] mx-auto">
            <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-900 rounded-md shadow-md">
                <h3 className="text-lg font-semibold dark:text-gray-300">Playlists</h3>
                <div className="ml-auto flex gap-3">
                    {/* Import Button */}
                    <label className="relative cursor-pointer text-[#1DB954] group">
                        <Upload size={20} />  {/* Change Import icon to Upload */}
                        <input type="file" accept="application/json" className="hidden" onChange={(event) => importPlaylists(event.target.files[0], true)} />
                        <span className="absolute top-full left-1/2 transform -translate-x-1/2 mb-2 text-xs bg-gray-800 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                            Import Playlists
                        </span>
                    </label>

                    {/* Export Button */}
                    <button onClick={exportPlaylists} className="relative cursor-pointer text-[#1DB954] group">
                        <Download size={20} />
                        <span className="absolute top-full left-1/2 transform -translate-x-1/2 mb-2 text-xs bg-gray-800 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                            Export Playlists
                        </span>
                    </button>

                    {/* Create Playlist Button */}
                    <button onClick={createPlaylistForm} className="relative cursor-pointer text-[#1DB954] group">
                        <Plus size={20} />
                        <span className="absolute top-full left-1/2 transform -translate-x-1/2 mb-2 text-xs bg-gray-800 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                            Create Playlist
                        </span>
                    </button>
                </div>

            </div>

            {playlists.length > 0 ? (
                <table className="mt-4 w-full bg-white dark:bg-gray-900 border-collapse rounded-lg shadow-md overflow-hidden">
                    <tbody>
                        {playlists.map((playlist, index) => (
                            <tr key={index} className="hover:bg-gray-100 dark:hover:bg-gray-700 transition cursor-pointer" onClick={() => handlePlaylistClick(playlist.name)}>
                                <td className="px-4 py-3 dark:text-gray-300">{index + 1}</td>
                                <td className="px-4 py-3 dark:text-gray-300 flex items-center gap-2">
                                    <Music size={18} className="text-[#1DB954]" />
                                    {playlist.name}
                                </td>
                                <td className="px-4 py-3">
                                    <div className="flex items-center justify-center">
                                        <Trash2 
                                            className="cursor-pointer text-red-500 hover:text-red-700 transition" 
                                            onClick={(e) => { e.stopPropagation(); deletePlaylist(index, playlist.name); }} 
                                        />
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p className="mt-4 text-gray-500 text-center">No playlists available. Create one!</p>
            )}
        </div>
    );
};

export default PlaylistManager;
