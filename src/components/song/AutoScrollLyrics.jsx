import { Play, Pause } from "lucide-react";
import PropTypes from "prop-types";

const AutoScrollLyrics = ({ autoScroll, setAutoScroll, speed, setSpeed, showAutoScrollLyrics }) => {
    return (
        <div className="sticky bottom-0 left-0 w-full p-4 flex items-center justify-center gap-4 z-50">
            <button 
                className="btn-primary p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition"
                onClick={() => setAutoScroll(prevAutoScroll => !prevAutoScroll)}
                disabled={!showAutoScrollLyrics}
            >
                {autoScroll ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
            </button>

            <input 
                type="range" 
                min="10" 
                max="100" 
                value={speed} 
                onChange={(e) => setSpeed(Number(e.target.value))} 
                className="w-48 cursor-pointer"
                disabled={!showAutoScrollLyrics}
            />
        </div>
    );
};

AutoScrollLyrics.propTypes = {
    autoScroll: PropTypes.bool.isRequired,
    setAutoScroll: PropTypes.func.isRequired,
    speed: PropTypes.number.isRequired,
    setSpeed: PropTypes.func.isRequired,
    showAutoScrollLyrics: PropTypes.bool.isRequired,
};

export default AutoScrollLyrics;