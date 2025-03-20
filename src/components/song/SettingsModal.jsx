import Modal from 'react-modal';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { X } from "lucide-react";
import AutoScrollLyrics from "./AutoScrollLyrics"
import Toggle from 'react-toggle'
import "react-toggle/style.css";

Modal.setAppElement('#root'); // Ensure accessibility compliance

const SettingsModal = ({
    isOpen,
    setIsOpen,
    showLyrics,
    setShowLyrics,
    showChords,
    setShowChords,
    showChordNumbers,
    setShowChordNumbers,
    allowSwipe,
    setAllowSwipe,
    showAutoScrollLyrics,
    setShowAutoScrollLyrics,
    autoScroll,
    setAutoScroll,
    speed,
    setSpeed,
    page,
}) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'auto';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={() => setIsOpen(false)}
            className="bg-gray-200 dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-300 mx-auto mt-20 outline-none backdrop-blur-sm"
            overlayClassName="fixed inset-0 flex items-center justify-center z-[99] bg-gray-900/60"
        >
            {/* Modal Header */}
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Settings</h2>
                <button 
                    onClick={() => setIsOpen(false)} 
                    className="dark:text-white hover:text-gray-400 cursor-pointer"
                >
                    <X size={40} />
                </button>
            </div>

            {/* Settings Options */}
            <div className="space-y-6">

                <div className="flex items-center space-x-3">
                    <Toggle
                        id="lyrics"
                        checked={showLyrics}
                        onChange={() => {
                            const newShowLyrics = !showLyrics;
                            setShowLyrics(newShowLyrics);

                            if (!newShowLyrics && !showChords) {
                                setShowAutoScrollLyrics(false);
                                setAutoScroll(false);
                            }
                        }}
                    />
                    <label htmlFor="lyrics" className="text-sm font-medium text-gray-900 dark:text-gray-300 cursor-pointer">
                        Lyrics
                    </label>
                </div>

                {/* Chords Toggle */}
                <div className="flex items-center space-x-3">
                    <Toggle
                        id="chords"
                        checked={showChords}
                        onChange={() => {
                            const newShowChords = !showChords;
                            setShowChords(newShowChords);

                            if (!newShowChords) {
                                setShowChordNumbers(false);
                            }

                            if (!showLyrics && !newShowChords) {
                                setShowAutoScrollLyrics(false);
                                setAutoScroll(false);
                            }
                        }}
                    />
                    <label htmlFor="chords" className="text-sm font-medium text-gray-900 dark:text-gray-300 cursor-pointer">
                        Chords
                    </label>
                </div>

                {/* Chord Numbers Toggle */}
                <div className="flex items-center space-x-3">
                    <Toggle
                        id="chordNumbers"
                        checked={showChordNumbers}
                        onChange={() => {
                            setShowChordNumbers(!showChordNumbers);
                            setShowChords(true);
                        }}
                    />
                    <label htmlFor="chordNumbers" className="text-sm font-medium text-gray-900 dark:text-gray-300 cursor-pointer">
                        Number Chart
                    </label>
                </div>

                {/* Enable Swiping Toggle */}
                {page !== 'select' && (
                    <div className="flex items-center space-x-3">
                        <Toggle
                            id="allowSwipe"
                            checked={allowSwipe}
                            onChange={() => setAllowSwipe(!allowSwipe)}
                        />
                        <label htmlFor="allowSwipe" className="text-sm font-medium text-gray-900 dark:text-gray-300 cursor-pointer">
                            Enable Swiping
                        </label>
                    </div>
                )}

                {/* Auto-Scroll Toggle */}
                <div className="flex items-center space-x-3">
                    <Toggle
                        id="showAutoScrollLyrics"
                        checked={showAutoScrollLyrics}
                        onChange={() => {
                            setShowAutoScrollLyrics(!showAutoScrollLyrics);
                            setAutoScroll(false);
                        }}
                    />
                    <label htmlFor="showAutoScrollLyrics" className="text-sm font-medium text-gray-900 dark:text-gray-300 cursor-pointer">
                        Auto-Scroll
                    </label>
                </div>

                <AutoScrollLyrics 
                    autoScroll={autoScroll} 
                    setAutoScroll={setAutoScroll} 
                    speed={speed} 
                    setSpeed={setSpeed} 
					showAutoScrollLyrics={showAutoScrollLyrics}
                />

            </div>
        </Modal>
    );
};

SettingsModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    setIsOpen: PropTypes.func.isRequired,
    showLyrics: PropTypes.bool.isRequired,
    setShowLyrics: PropTypes.func.isRequired,
    showChords: PropTypes.bool.isRequired,
    setShowChords: PropTypes.func.isRequired,
    showChordNumbers: PropTypes.bool.isRequired,
    setShowChordNumbers: PropTypes.func.isRequired,
    allowSwipe: PropTypes.bool,
    setAllowSwipe: PropTypes.func,
    showAutoScrollLyrics: PropTypes.bool.isRequired,
    setShowAutoScrollLyrics: PropTypes.func.isRequired,
    autoScroll: PropTypes.bool.isRequired,
    setAutoScroll: PropTypes.func.isRequired,
    speed: PropTypes.number.isRequired,
    setSpeed: PropTypes.func.isRequired,
    page: PropTypes.string.isRequired,
};

export default SettingsModal;
