import PropTypes from 'prop-types';

const SongLyrics = ({ transposedSections, showLyrics, showChords }) => {
    const italizeText = (text) => (
        <div>
            <i>{text}</i>
        </div>
    );

    return (
        <div className="flex flex-wrap">
            {(() => {
                const totalSections = transposedSections.length;

                // Calculate how many sections go into each column
                const firstColumn = transposedSections.slice(0, Math.max(Math.ceil(totalSections / 2), 3));
                const secondColumn = transposedSections.slice(firstColumn.length);

                // Render the column content
                const renderColumn = (sections) =>
                    sections.map((section, sectionIndex) => ((showLyrics || showChords) && (
                        <div key={sectionIndex} className={`mb-4 ${!showChords && section.isNotLyric ? "hidden" : ""}`}>
                            <h5 className="text-lg text-blue-600 dark:text-blue-700 font-semibold">{section.type}</h5>
                            {section.lyrics.map((line, lineIndex) => (
                                <div key={lineIndex}>
                                    <div className="flex mt-1 overflow-auto text-base">
                                        {showChords && section.chords[lineIndex]?.map((chordObj, chordIndex) => (
                                            <span
                                                key={chordIndex}
                                                className="dark:text-gray-300 font-semibold"
                                                style={{
                                                    position: "relative",
                                                    left: showLyrics ? `${chordObj.position / 2}%` : 0,
                                                }}
                                            >
                                                {(chordObj.left || chordObj.leftRight) && ' | '}
                                                {(chordObj.leftColon) && ' |: '}
                                                {(chordObj.leftParenthesis || chordObj.leftRightParenthesis) && ' ( '}
                                                {chordObj.dash ? (chordObj.spaceBetween ? (!showLyrics?'\u00A0-\u00A0':' - ') : '-') : ''}
                                                {chordObj.chord}
                                                {(chordObj.percentage && (chordObj.leftPercentage || chordObj.leftRightPercentage)) && ' |'}
                                                {(chordObj.percentage) && ' % '}
                                                {(chordObj.percentage && (chordObj.rightPercentage || chordObj.leftRightPercentage)) && '| '}
                                                {chordObj.forwardSlash && Array.from({ length: chordObj.forwardSlash }, () => ' /').join('')}
                                                {(chordObj.rightParenthesis || chordObj.leftRightParenthesis) && ' ) '}
                                                {(chordObj.rightColon) && ' :| '}
                                                {(chordObj.right || chordObj.leftRight) && ' | '}
                                                {chordIndex === section.chords[lineIndex].length - 1 && section.times?.[lineIndex] ? ` (${section.times[lineIndex]}x)` : ''}
                                            </span>
                                        ))}
                                    </div>
                                    {showLyrics && (
                                        <span className="dark:text-gray-300 whitespace-pre-wrap text-base">
                                            {section?.italize && section.italize[lineIndex] === true
                                                ? italizeText(showChords ? line : line.trim())
                                                : (showChords ? line : line.trim())
                                            }
                                        </span>
                                    )}
                                </div>
                            ))}
                        </div>
                    )));

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
    );
};

SongLyrics.propTypes = {
    transposedSections: PropTypes.arrayOf(
        PropTypes.shape({
            type: PropTypes.string.isRequired,
            lyrics: PropTypes.arrayOf(PropTypes.string).isRequired,
            chords: PropTypes.arrayOf(
                PropTypes.arrayOf(
                    PropTypes.shape({
                        chord: PropTypes.oneOfType([
                            PropTypes.number,
                            PropTypes.string
                        ]).isRequired,
                        position: PropTypes.number.isRequired,
                        left: PropTypes.bool,
                        leftRight: PropTypes.bool,
                        leftColon: PropTypes.bool,
                        leftParenthesis: PropTypes.bool,
                        leftRightParenthesis: PropTypes.bool,
                        dash: PropTypes.bool,
                        spaceBetween: PropTypes.bool,
                        percentage: PropTypes.bool,
                        leftPercentage: PropTypes.bool,
                        leftRightPercentage: PropTypes.bool,
                        rightPercentage: PropTypes.bool,
                        forwardSlash: PropTypes.number,
                        rightParenthesis: PropTypes.bool,
                        rightColon: PropTypes.bool,
                        right: PropTypes.bool,
                    })
                )
            ),
            times: PropTypes.arrayOf(PropTypes.oneOfType([
                PropTypes.number,
                PropTypes.string
            ])),
            italize: PropTypes.arrayOf(PropTypes.bool),
            isNotLyric: PropTypes.bool,
        })
    ).isRequired,
    showLyrics: PropTypes.bool.isRequired,
    showChords: PropTypes.bool.isRequired,
};

export default SongLyrics;
