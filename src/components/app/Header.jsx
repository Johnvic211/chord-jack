import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import useDarkMode from "./UseDarkMode";
import { Sun, Moon } from "lucide-react"

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { isDarkMode, toggleDarkMode } = useDarkMode();
    const location = useLocation(); // Get current route

    // Function to determine active link
    const getActiveClass = (path) => 
        location.pathname.startsWith(path)
            ? "text-indigo-600 font-bold" 
            : "text-white-600 hover:text-indigo-500";

    return (
        <header className="px-4 py-5 shadow-md w-full sticky top-0 bg-white dark:bg-black dark:text-gray-300 z-50">
            <div className="flex justify-between items-center">
                <h4 className="text-lg font-semibold">🎵 ChordJack</h4>

                {/* Buttons Wrapper */}
                <div className="flex items-center gap-2">
                    {/* Dark Mode Toggle */}
                    <button
                        onClick={toggleDarkMode}
                        className="p-2 bg-gray-200 dark:bg-gray-800 rounded-full cursor-pointer"
                    >
                        {isDarkMode ? <Sun className="w-6 h-6 text-yellow-600" /> : <Moon className="w-6 h-6 text-gray-600" />}
                    </button>

                    {/* Hamburger Icon (Mobile) */}
                    <button 
                        className="lg:hidden text-gray-600 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400 focus:outline-none cursor-pointer"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Desktop Menu */}
                <nav className="hidden lg:flex space-x-6">
                    <NavLink to="/song" className={`px-3 py-2 rounded-md transition-all duration-200 ${getActiveClass('/song')}`}>
                        Song
                    </NavLink>
                    <NavLink to="/playlist" className={`px-3 py-2 rounded-md transition-all duration-200 ${getActiveClass('/playlist')}`}>
                        Playlist
                    </NavLink>
                </nav>
            </div>


            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <nav className="lg:hidden flex flex-col mt-3 bg-white dark:bg-gray-900 border dark:border-gray-700 rounded-lg shadow-md">
                    <NavLink 
                        to="/song" 
                        className={`block px-4 py-3 ${getActiveClass('/song')}`}
                        onClick={() => setIsOpen(false)}
                    >
                        Song
                    </NavLink>
                    <NavLink 
                        to="/playlist" 
                        className={`block px-4 py-3 ${getActiveClass('/playlist')}`}
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
