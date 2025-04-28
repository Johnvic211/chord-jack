import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const SongSelector = ({ songBank }) => {
	const [searchTerm, setSearchTerm] = useState("");
	const [isFocused, setIsFocused] = useState(false);
	const [focusedIndex, setFocusedIndex] = useState(-1);
	const dropdownRef = useRef(null);
	const inputRef = useRef(null);
	const itemRefs = useRef([]);
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

	useEffect(() => {
		const handleKeyDown = (e) => {
			if (!isFocused || filteredSongs.length === 0) return;

			if (e.key === 'ArrowDown') {
				e.preventDefault();
				setFocusedIndex((prev) => (prev + 1) % filteredSongs.length);
			} else if (e.key === 'ArrowUp') {
				e.preventDefault();
				setFocusedIndex((prev) => (prev - 1 + filteredSongs.length) % filteredSongs.length);
			} else if (e.key === 'Enter' && focusedIndex >= 0) {
				e.preventDefault();
				const selectedSong = filteredSongs[focusedIndex];
				if (selectedSong) {
					const encodedTitle = encodeURIComponent(selectedSong.title);
					navigate(`/song/${encodedTitle}`);
					setSearchTerm('');
					setIsFocused(false);
					setFocusedIndex(-1);
				}
			}
		};

		window.addEventListener('keydown', handleKeyDown);

		if (focusedIndex >= 0 && itemRefs.current[focusedIndex]) {
			itemRefs.current[focusedIndex].scrollIntoView({
				behavior: 'smooth',
				block: 'nearest',
			});
		}

		return () => window.removeEventListener('keydown', handleKeyDown);
	}, [focusedIndex, filteredSongs, isFocused, navigate]);

	return (
		<div className="flex justify-center">
			<div className="relative p-3 w-full max-w-[400px]" ref={dropdownRef}>
				<label htmlFor="songSearch" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
					Search for a worship song
				</label>

				<div className="relative">
					<input
						type="text"
						id="songSearch"
						ref={inputRef}
						className="block w-full px-4 py-2 border border-gray-500 dark:border-white rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 sm:text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200"
						placeholder="ex. Grace Abounds"
						value={searchTerm}
						onChange={(e) => {
							setSearchTerm(e.target.value);
							setFocusedIndex(-1); // Reset on change
						}}
						onFocus={() => setIsFocused(true)}
					/>

					{isFocused && filteredSongs.length > 0 && (
						<ul className="absolute z-10 mt-2 w-full max-w-[375px] bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-900 rounded-lg shadow-lg max-h-48 overflow-y-auto">
							{filteredSongs.map((song, index) => (
							<li
								key={song.title}
								ref={(el) => (itemRefs.current[index] = el)}
								className={`px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-indigo-100 dark:hover:bg-indigo-700 hover:text-indigo-600 dark:hover:text-white cursor-pointer transition-colors duration-200 
									${index === focusedIndex ? 'bg-indigo-100 dark:bg-indigo-700 text-indigo-600 dark:text-white' : ''}`}
								onMouseDown={() => {
									const encodedTitle = encodeURIComponent(song.title);
									navigate(`/song/${encodedTitle}`);
									setSearchTerm('');
									setIsFocused(false);
									setFocusedIndex(-1);
								}}
							>
								{song.title}
							</li>
							))}
						</ul>
					)}
				</div>

				{/* No results message */}
				{isFocused && searchTerm && filteredSongs.length === 0 && (
					<p className="absolute z-10 mt-2 w-full max-w-[375px] bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg px-4 py-2 text-sm text-gray-500 dark:text-gray-400 italic">
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
			lyrics: PropTypes.array,
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
