import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const SongSelector = ({ songBank }) => {
	const [searchTerm, setSearchTerm] = useState("");
	const [isFocused, setIsFocused] = useState(false);
	const dropdownRef = useRef(null);
	const navigate = useNavigate();

	// Filter songs based on search term
	const filteredSongs = songBank.filter((song) =>
		song.title.toLowerCase().includes(searchTerm.toLowerCase())
	);

	// Close dropdown when clicking outside
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
				setIsFocused(false);
			}
		};

		if (isFocused) {
			document.addEventListener("mousedown", handleClickOutside);
		} else {
			document.removeEventListener("mousedown", handleClickOutside);
		}

		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, [isFocused]);

	return (
		<div className="flex justify-center">
			<div className="relative p-3 w-full max-w-[400px]" ref={dropdownRef}>
				<label htmlFor="songSearch" className="block text-sm font-medium text-gray-700 mb-2">
					Search for a worship song
				</label>

				<div className="relative">
					<input
						type="text"
						id="songSearch"
						className="block w-full px-4 py-2 border border-gray-500 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 sm:text-sm"
						placeholder="ex. Grace Abounds"
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
						onFocus={() => setIsFocused(true)}
					/>

					{/* Reset button (X icon) */}
					{searchTerm && (
						<button
						type="button"
						onClick={() => setSearchTerm('')}
						className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
						>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
						</svg>
						</button>
					)}
				</div>

				{/* Dropdown menu */}
				{isFocused && filteredSongs.length > 0 && (
					<ul className="absolute z-10 mt-2 w-full max-w-[375px] bg-white border border-gray-300 rounded-lg shadow-lg max-h-48 overflow-auto">
						{filteredSongs.map((song) => {
						return (
							<li
								key={song.title} // ✅ Use title as key
								className="px-4 py-2 text-gray-800 hover:bg-indigo-100 hover:text-indigo-600 cursor-pointer transition-colors duration-200"
								onMouseDown={() => {
									const encodedTitle = encodeURIComponent(song.title); // ✅ Encode title for URL safety
									navigate(`/song-chords/song/${encodedTitle}`); // ✅ Navigate using title
									setSearchTerm('');
									setIsFocused(false);
								}}
							>
							{song.title}
							</li>
						);
						})}
					</ul>
				)}

				{/* No results message */}
				{isFocused && searchTerm && filteredSongs.length === 0 && (
					<p className="absolute z-10 mt-2 w-full max-w-[375px] bg-white border border-gray-300 rounded-lg shadow-lg px-4 py-2 text-sm text-gray-500 italic">
						No matching songs found.
					</p>
				)}
			</div>
		</div>
	);
};

SongSelector.propTypes = {
	songBank: PropTypes.arrayOf(
		PropTypes.shape({
		title: PropTypes.string.isRequired,
		artist: PropTypes.string,
		originalKey: PropTypes.string,
		bpm: PropTypes.number,
		sections: PropTypes.arrayOf(
			PropTypes.shape({
			type: PropTypes.string,
			lyrics: PropTypes.arrayOf(PropTypes.string),
			chords: PropTypes.arrayOf(
				PropTypes.arrayOf(
				PropTypes.shape({
					chord: PropTypes.string,
					position: PropTypes.number,
				})
				)
			),
			})
		),
		})
	).isRequired,
};

export default SongSelector;
