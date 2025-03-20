import TransposeKey from './TransposeKey';
import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Url from './Url'; 
import { ExternalLink, Settings } from "lucide-react";
import Swal from "sweetalert2";
import AutoScrollLyrics from "./AutoScrollLyrics"
import SongLyrics from "./SongLyrics"
import SettingsModal from "./SettingsModal"

const SongTransposer = ({ selectedSong, page, allowSwipe, setAllowSwipe }) => {
	const chordMap = selectedSong.chordMap; 
	const storageKey = `${page}_song_settings_${selectedSong.title}`;
	const savedSettings = JSON.parse(localStorage.getItem(storageKey)) || {};

	const [selectedKey, setSelectedKey] = useState(savedSettings.selectedKey || selectedSong.originalKey);
	const [showLyrics, setShowLyrics] = useState(savedSettings.showLyrics ?? true);
	const [showChords, setShowChords] = useState(savedSettings.showChords ?? true);
	const [showChordNumbers, setShowChordNumbers] = useState(savedSettings.showChordNumbers ?? false);
	const [showAutoScrollLyrics, setShowAutoScrollLyrics] = useState(savedSettings.showAutoScrollLyrics ?? false);
	const [autoScroll, setAutoScroll] = useState(savedSettings.autoScroll ?? false);
	const [speed, setSpeed] = useState(savedSettings.speed ?? 70);
	const [isOpen, setIsOpen] = useState(false);

	const speedRef = useRef(speed);
	const animationFrameRef = useRef(null);
	const accumulatedScroll = useRef(0);

	// Load saved settings when the song changes
	useEffect(() => {
		const updatedSettings = JSON.parse(localStorage.getItem(storageKey)) || {};

		setSelectedKey(updatedSettings.selectedKey || selectedSong.originalKey);
		setShowLyrics(updatedSettings.showLyrics ?? true);
		setShowChords(updatedSettings.showChords ?? true);
		setShowChordNumbers(updatedSettings.showChordNumbers ?? false);
		setShowAutoScrollLyrics(updatedSettings.showAutoScrollLyrics ?? false);
		setAutoScroll(updatedSettings.autoScroll ?? false);
		setSpeed(updatedSettings.speed ?? 70);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [selectedSong]);

	// Save settings when values change
	useEffect(() => {
		localStorage.setItem(storageKey, JSON.stringify({
			selectedKey,
			showLyrics,
			showChords,
			showChordNumbers,
			showAutoScrollLyrics,
			autoScroll,
			speed
		}));
	}, [selectedKey, showLyrics, showChords, showChordNumbers, showAutoScrollLyrics, autoScroll, speed, storageKey]);

	// Keep speedRef updated
	useEffect(() => {
		speedRef.current = speed;
	}, [speed]);

	// Auto-scroll functionality
	useEffect(() => {
		const scroll = () => {
			const scrollAmount = speedRef.current / 60;
			accumulatedScroll.current += scrollAmount;

			if (accumulatedScroll.current >= 1) {
				window.scrollBy(0, Math.floor(accumulatedScroll.current));
				accumulatedScroll.current %= 1;
			}

			animationFrameRef.current = requestAnimationFrame(scroll);
		};

		if (autoScroll) {
			animationFrameRef.current = requestAnimationFrame(scroll);
		} else {
			cancelAnimationFrame(animationFrameRef.current);
			animationFrameRef.current = null;
		}

		return () => cancelAnimationFrame(animationFrameRef.current);
	}, [autoScroll]);

	// Calculate steps for transposing between keys
	const calculateSteps = (fromKey, toKey) => {
		const fromIndex = chordMap.indexOf(fromKey);
		const toIndex = chordMap.indexOf(toKey);
		return toIndex - fromIndex;
	};

	// Transpose a chord with steps
	const transposeChord = (chord, steps) => {
		// Check if the chord has a slash (e.g., D/F#)
		const [baseChord, afterSlash] = chord.split('/');

		// Handle chord with modifiers (e.g., C#m)
		const chordMatch = baseChord.match(/^([A-G#b]+)(.*)$/); // Match base chord + modifiers
		if (!chordMatch) return chord; // Return original if no match

		const baseChordName = chordMatch[1]; // Extract base chord name (e.g., "C#")
		const modifier = chordMatch[2] || ''; // Extract modifier (e.g., "m")

		// Standardize the base chord and find its index
		const baseChordStandardized = baseChordName;
		let baseChordIndex = chordMap.indexOf(baseChordStandardized);
		if (baseChordIndex === -1) return chord; // Return the chord if not found

		// Transpose the base chord
		let newBaseChordIndex = (baseChordIndex + steps + chordMap.length) % chordMap.length;
		const newBaseChord = chordMap[newBaseChordIndex];

		// If there's an afterslash part (e.g., "D/F#"), handle it similarly
		let newAfterSlash = afterSlash || ''; // Default to empty string if no afterslash

		if (afterSlash) {
			const afterSlashStandardized = afterSlash;
			let afterSlashIndex = chordMap.indexOf(afterSlashStandardized);

			if (afterSlashIndex !== -1) {
				let newAfterSlashIndex = (afterSlashIndex + steps + chordMap.length) % chordMap.length;
				newAfterSlash = chordMap[newAfterSlashIndex];
			}
		}

		// Return the transposed chord, keeping the afterslash if it exists
		return newAfterSlash ? `${newBaseChord}/${newAfterSlash}${modifier}` : `${newBaseChord}${modifier}`;
	};

	// Generate scale chords for the selected key
	const majorScaleDegrees = [0, 2, 4, 5, 7, 9, 11];
	const generateScaleChords = (key) => {
		const rootIndex = chordMap.indexOf(key);
		if (rootIndex === -1) return [];
		return majorScaleDegrees.map((interval) => chordMap[(rootIndex + interval) % chordMap.length]);
	};

	const scaleChords = generateScaleChords(selectedKey);

	// Function to convert chord to its scale degree (1-7)
	const getChordNumber = (chord) => {
		const [baseChord, afterSlash] = chord.split('/');
		
		const baseChordMatch = baseChord.match(/[A-G#b]+/);
		const baseChordName = baseChordMatch ? baseChordMatch[0] : null;
		
		if (!baseChordName) return chord;
		
		const baseChordIndex = scaleChords.indexOf(baseChordName);
		const baseChordNumber = baseChordIndex !== -1 ? `${baseChordIndex + 1}` : baseChord;

		let result = baseChordNumber;

		if (afterSlash) {
			const afterSlashMatch = afterSlash.match(/[A-G#b]+/);
			let afterSlashNumber = afterSlash;  

			if (afterSlashMatch) {
				const afterSlashChord = afterSlashMatch[0];
				const scalePosition = chordMap.indexOf(afterSlashChord) - chordMap.indexOf('C');
				const degreeInScale = (scalePosition + chordMap.length) % chordMap.length;
				
				if(scaleChords.includes(chordMap[degreeInScale])) {
					afterSlashNumber = `${scaleChords.indexOf(chordMap[degreeInScale]) + 1}`;
				} else {
					// If the chord isn't in the natural scale, check for sharps or flats:
					if (afterSlashChord.includes('#')) {
						// Find the natural note below the sharp
						const naturalNote = afterSlashChord.replace('#', '');
						const naturalPosition = chordMap.indexOf(naturalNote) - chordMap.indexOf('C');
						const naturalDegree = (naturalPosition + chordMap.length) % chordMap.length;

						if(scaleChords.includes(chordMap[naturalDegree])) {
							// If the natural note is in the scale, we add sharp to its degree
							afterSlashNumber = `${scaleChords.indexOf(chordMap[naturalDegree]) + 1}#`;
						} else {
							// Here you might decide to just use the sharp notation or another convention
							afterSlashNumber = `${scaleChords.indexOf(chordMap[naturalDegree]) + 1}#`;
						}
					} else if (afterSlashChord.includes('b')) {
						// For flat chords, calculate similarly to sharp but adjust for flat degree
						const naturalNote = afterSlashChord.replace('b', '');
						const naturalPosition = chordMap.indexOf(naturalNote) - chordMap.indexOf('C');
						const naturalDegree = (naturalPosition + chordMap.length) % chordMap.length;

						// Check if the flat note is part of the scale and assign flat notation
						if (scaleChords.includes(chordMap[naturalDegree])) {
							afterSlashNumber = `${scaleChords.indexOf(chordMap[naturalDegree]) + 1}b`;
						} else {
							afterSlashNumber = `${scaleChords.indexOf(chordMap[naturalDegree]) + 1}b`;
						}
					} else {
						if (scaleChords.includes(chordMap)) {
							afterSlashNumber = afterSlashChord; // Keep as-is if not in scale
						}
					}
				}
			}

			result = `${baseChordNumber}/${afterSlashNumber}`;
		}

		return result;
	};

	// Main logic to map and transpose chords using calculateSteps
	const transposedSections = selectedSong.sections.map((section) => ({
		...section,
		chords: section.chords.map((line) =>
		line.map((chordObj) => {
			const steps = calculateSteps(selectedSong.originalKey, selectedKey);  // Calculate steps
			const transposedChord = transposeChord(chordObj.chord, steps);  // Transpose chord based on steps
			const chordNumber = chordObj.number ? chordObj.number : getChordNumber(transposedChord)

			return {
			...chordObj,
			chord: showChordNumbers
				? chordNumber  // Convert transposed chord to number if needed
				: transposedChord,  // Else display transposed chord
			};
		})
		),
	}));

	const copyPath = async () => {
		try {
			await navigator.clipboard.writeText(window.location.href);
			Swal.fire({
				icon: "success",
				title: "Copied!",
				text: "Link copied to clipboard!",
				showConfirmButton: false,
				timer: 2000
			});
		} catch (err) {
			console.error("Failed to copy:", err);
		}
	};

	return (
        <main>
            <div className="container mx-auto mt-4 px-4">
                <div className="bg-white dark:bg-gray-900 dark:text-gray-300 shadow-lg rounded-lg p-4 mb-2">
                    {/* Song Title & External Link */}
                    <h3 className="text-left mb-3 text-2xl font-semibold flex">
                        {selectedSong.title} &nbsp;
                        {page === "select" && (
                            <ExternalLink size={28} className="cursor-pointer" onClick={copyPath} />
                        )}

						{/* Settings Button */}
						<button onClick={() => setIsOpen(true)} className="dark:text-gray-300 hover:text-gray-400 ml-auto">
							<Settings size={40} className='cursor-pointer' />
						</button>
                    </h3>

                    <p className="text-lg">
                        <strong>By:</strong> {selectedSong.artist}
                    </p>
                    <p className="text-lg">
                        <strong>Original Key:</strong> {selectedSong.originalKey}
                    </p>
                    {selectedSong.bpm && (
                        <p className="text-lg">
                            <strong>BPM:</strong> {selectedSong.bpm}
                        </p>
                    )}

                    <div className="flex">
                        {selectedSong.link &&
                            selectedSong.link.map((element, index) => (
                                <Url key={index} platform={element.platform} url={element.url} />
                            ))}
                    </div>

                    {/* Settings Modal */}
                    {isOpen && (
                        <SettingsModal
                            isOpen={isOpen}
                            setIsOpen={setIsOpen}
                            showLyrics={showLyrics}
                            setShowLyrics={setShowLyrics}
                            showChords={showChords}
                            setShowChords={setShowChords}
                            showChordNumbers={showChordNumbers}
                            setShowChordNumbers={setShowChordNumbers}
                            allowSwipe={allowSwipe}
                            setAllowSwipe={setAllowSwipe}
                            showAutoScrollLyrics={showAutoScrollLyrics}
                            setShowAutoScrollLyrics={setShowAutoScrollLyrics}
							autoScroll={autoScroll}
                            setAutoScroll={setAutoScroll}
							speed={speed}
							setSpeed={setSpeed}
                            page={page}
                        />
                    )}

                    {/* Key Transpose Dropdown */}
                    <TransposeKey
                        setSelectedKey={setSelectedKey}
                        setShowChordNumbers={setShowChordNumbers}
                        selectedKey={selectedKey}
                        chordMap={chordMap}
                    />

                    {/* Lyrics & Chords Display */}
                    <SongLyrics 
						transposedSections={transposedSections} 
						showLyrics={showLyrics} 
						showChords={showChords} 
					/>
                </div>
            </div>

            {/* Auto Scroll Component */}
            {showAutoScrollLyrics && !isOpen && (
                <AutoScrollLyrics 
					autoScroll={autoScroll} 
					setAutoScroll={setAutoScroll} 
					speed={speed} 
					setSpeed={setSpeed} 
					showAutoScrollLyrics={showAutoScrollLyrics}
				/>
            )}
        </main>
    );

};

// PropTypes for validation
SongTransposer.propTypes = {
	selectedSong: PropTypes.shape({
		title: PropTypes.string.isRequired,
		artist: PropTypes.string.isRequired,
		link: PropTypes.arrayOf(
			PropTypes.shape({
				platform: PropTypes.string,
				link: PropTypes.string,
			}) 
		),
		originalKey: PropTypes.string.isRequired,
		chordMap: PropTypes.array.isRequired,
		bpm: PropTypes.number,
		sections: PropTypes.arrayOf(
			PropTypes.shape({
				type: PropTypes.string,
				lyrics: PropTypes.arrayOf(PropTypes.string),
				chords: PropTypes.arrayOf(
					PropTypes.arrayOf(
						PropTypes.shape({
						chord: PropTypes.string.isRequired,
						position: PropTypes.number,
						})
					)
				),
			})
		).isRequired,
	}).isRequired,
	page: PropTypes.string.isRequired,
	allowSwipe: PropTypes.bool,
    setAllowSwipe: PropTypes.func,
};

export default SongTransposer;
