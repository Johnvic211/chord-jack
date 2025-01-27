import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const SongTransposer = ({ selectedSong }) => {
  const [selectedKey, setSelectedKey] = useState(selectedSong.originalKey);
  const [showLyrics, setShowLyrics] = useState(true);
  const [showChords, setShowChords] = useState(true);
  const [showChordNumbers, setShowChordNumbers] = useState(false);

  const chordMap = [
    "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B",
  ];

  const calculateSteps = (fromKey, toKey) => {
    const fromIndex = chordMap.indexOf(fromKey);
    const toIndex = chordMap.indexOf(toKey);
    return toIndex - fromIndex;
  };

  const steps = calculateSteps(selectedSong.originalKey, selectedKey);

  const transposeChord = (chord, steps) => {
    const baseChord = chord.match(/[A-G#b]+/)[0];
    const modifier = chord.replace(baseChord, "");

    let index = chordMap.indexOf(baseChord);
    if (index === -1) return chord;

    let newIndex = (index + steps + chordMap.length) % chordMap.length;
    return chordMap[newIndex] + modifier;
  };

  const majorScaleDegrees = [0, 2, 4, 5, 7, 9, 11]; // Major scale intervals

  // Generate the 1-7 chords for the selected key
  const generateScaleChords = (key) => {
    const rootIndex = chordMap.indexOf(key);
    if (rootIndex === -1) return [];
    return majorScaleDegrees.map((interval) => chordMap[(rootIndex + interval) % chordMap.length]);
  };
  
  const scaleChords = generateScaleChords(selectedKey); // Scale chords for the selected key
  
  // Function to map chords to numbers
  const getChordNumber = (chord) => {
    const baseChordMatch = chord.match(/[A-G#b]+/); // Extract base chord
    const baseChord = baseChordMatch ? baseChordMatch[0] : null;
  
    if (!baseChord) return chord; // If no valid chord, return as is
  
    const chordIndex = scaleChords.indexOf(baseChord); // Find chord in the scale
    return chordIndex !== -1 ? `${chordIndex + 1}` : chord; // Return chord number or original chord
  };
  
  // Map and transpose chords
  const transposedSections = selectedSong.sections.map((section) => ({
    ...section,
    chords: section.chords.map((line) =>
      line.map((chordObj) => {
        const transposedChord = transposeChord(chordObj.chord, steps); // Transpose chord if necessary
  
        return {
          ...chordObj,
          chord: showChordNumbers
            ? getChordNumber(transposedChord) // Convert transposed chord to chord number only
            : transposedChord, // Display transposed chord
        };
      })
    ),
  }));

  useEffect(() => {
    setSelectedKey(selectedSong.originalKey);
  }, [selectedSong]);
  
  const italizeText = (text) => {
    return (
      <div>
        <i>{text}</i>
      </div>
    )
  }

  return (
    <main>
      {/* Main Content */}
      <div className="container mx-auto mt-4 px-4">
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h3 className="text-left mb-3 text-2xl font-semibold">{selectedSong.title} Chords</h3>
          <p className="text-lg"><strong>By:</strong> {selectedSong.artist}</p>
          <p className="text-lg"><strong>Original Key:</strong> {selectedSong.originalKey}</p>
          <p className="text-lg"><strong>BPM:</strong> {selectedSong.bpm}</p>

          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              id="lyrics"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
              checked={showLyrics}
              onChange={() => setShowLyrics(!showLyrics)}
            />
            <label
              htmlFor="lyrics"
              className="text-sm font-medium text-gray-900 cursor-pointer"
            >
              Lyrics
            </label>
            <input
              type="checkbox"
              id="chords"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
              checked={showChords}
              onChange={() => setShowChords(!showChords)}
            />
            <label
              htmlFor="chords"
              className="text-sm font-medium text-gray-900 cursor-pointer"
            >
              Chords
            </label>
            <input
              type="checkbox"
              id="chordNumbers"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
              checked={showChordNumbers}
              onChange={() => setShowChordNumbers(!showChordNumbers)}
            />
            <label
              htmlFor="chordNumbers"
              className="text-sm font-medium text-gray-900 cursor-pointer"
            >
              Chord No.
            </label>
          </div>

          

          {/* Key Dropdown */}
          <div className="mb-5">
            <label htmlFor="keySelector" className="block text-lg mt-2 font-medium text-gray-700 mb-2">
              Transpose Key
            </label>

            <div className="flex items-center space-x-3">
              <button
                className="btn-primary"
                onClick={() => {
                                setSelectedKey(chordMap[(chordMap.indexOf(selectedKey) + 1) % chordMap.length]);
                                setShowChordNumbers(false);
                              }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v12M6 12h12"></path>
                </svg>
              </button>

              <select
                id="keySelector"
                className="block px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-blue-500 sm:text-sm w-[75px]"
                value={selectedKey}
                onChange={(e) => {setSelectedKey(e.target.value); setShowChordNumbers(false);}}
              >
                {chordMap.map((key) => (
                  <option key={key} value={key}>
                    {key}
                  </option>
                ))}
              </select>

              <button
                className="btn-primary"
                onClick={() => {setSelectedKey(chordMap[(chordMap.indexOf(selectedKey) - 1 + chordMap.length) % chordMap.length]); setShowChordNumbers(false);}}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4"></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Lyrics and Chords */}
          <div className="flex flex-wrap">
            {(() => {
              const totalSections = transposedSections.length;

              // Calculate how many sections go into each column
              const firstColumn = transposedSections.slice(0, Math.max(Math.ceil(totalSections / 2), 3));
              const secondColumn = transposedSections.slice(firstColumn.length);

              // Render the column content
              const renderColumn = (sections) =>
                sections.map((section, sectionIndex) => (
                  <div key={sectionIndex} className="mb-4">
                    <h5 className="text-lg text-blue-600 font-semibold">{section.type}</h5>
                    {section.lyrics.map((line, lineIndex) => (
                      <div key={lineIndex}>
                        <div className="flex mt-1">
                          {showChords && section.chords[lineIndex]?.map((chordObj, chordIndex) => (
                            <span
                              key={chordIndex}
                              className="text-base font-semibold"
                              style={{ 
                                position: "relative", 
                                left: showLyrics ? `${chordObj.position / 2}%` : 0,
                                marginLeft: showLyrics || chordObj.dash ? "0px" : "5px",
                               }}
                            >
                              {(chordObj.left || chordObj.leftRight) && ' | '}
                              {chordObj.dash && '-'}
                              {chordObj.chord}
                              {(chordObj.right || chordObj.leftRight) && ' | '} 
                              {chordIndex == section.chords[lineIndex].length - 1 && section.times?.[lineIndex] ? section.times[lineIndex] + 'x' : ''}
                            </span>
                          ))}
                        </div>
                        {showLyrics && (
                          <span className="text-base whitespace-pre-wrap">
                            {(section?.italize && section.italize[lineIndex] === true) ? italizeText(line) : line}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                ));

              return (
                <>
                  {/* First Column */}
                  <div className="flex-1 min-w-[350px] max-w-[350px]">{renderColumn(firstColumn)}</div>

                  {/* Second Column */}
                  <div className="flex-1 min-w-[350px] max-w-[350px]">{renderColumn(secondColumn)}</div>
                </>
              );
            })()}
          </div>
        </div>
      </div>
    </main>
  );
};

// PropTypes for validation
SongTransposer.propTypes = {
  selectedSong: PropTypes.shape({
    title: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
    originalKey: PropTypes.string.isRequired,
    bpm: PropTypes.number.isRequired,
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
};

export default SongTransposer;
