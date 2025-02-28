import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation(); // Get current route

    // Function to determine active link
    const getActiveClass = (path) => 
        location.pathname.startsWith(path)
            ? "text-indigo-600 font-bold" 
            : "text-gray-600 hover:text-indigo-500";

    return (
        <header className="px-4 py-5 shadow-md w-full sticky top-0 bg-white z-50">
            <div className="flex justify-between items-center">
                <h4 className="text-lg font-semibold">🎵 Song Transposer</h4>

                {/* Hamburger Icon (Mobile) */}
                <button 
                    className="lg:hidden text-gray-600 hover:text-indigo-500 focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Desktop Menu */}
                <nav className="hidden lg:flex space-x-6">
                    <NavLink to="/song-chords/song" className={`px-3 py-2 rounded-md transition-all duration-200 ${getActiveClass('/song-chords/song')}`}>
                        Song
                    </NavLink>
                    <NavLink to="/song-chords/playlist" className={`px-3 py-2 rounded-md transition-all duration-200 ${getActiveClass('/song-chords/playlist')}`}>
                        Playlist
                    </NavLink>
                </nav>
            </div>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <nav className="lg:hidden flex flex-col mt-3 bg-white border rounded-lg shadow-md">
                    <NavLink 
                        to="/song-chords/song" 
                        className={`block px-4 py-3 ${getActiveClass('/song-chords/song')}`}
                        onClick={() => setIsOpen(false)}
                    >
                        Song
                    </NavLink>
                    <NavLink 
                        to="/song-chords/playlist" 
                        className={`block px-4 py-3 ${getActiveClass('/song-chords/playlist')}`}
                        onClick={() => setIsOpen(false)}
                    >
                        Playlist
                    </NavLink>
                </nav>
            )}
        </header>
    );
};

export default Header;
