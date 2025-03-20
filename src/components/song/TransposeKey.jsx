import PropTypes from "prop-types";
import { Plus, Minus } from "lucide-react";

const TransposeKey = ({ setSelectedKey, setShowChordNumbers, selectedKey, chordMap }) => {
    return (
        <div className="mb-5">
            <label htmlFor="keySelector" className="block text-lg mt-2 font-medium text-gray-700 dark:text-gray-300 mb-2">
                Transpose Key
            </label>

            <div className="flex items-center space-x-3  z-[22]">
                <button 
                    className="btn-primary"
                    onClick={() => {
                        setSelectedKey(chordMap[(chordMap.indexOf(selectedKey) + 1) % chordMap.length]);
                        setShowChordNumbers(false);
                    }}
                >
                    <Plus className="w-6 h-6" />
                </button>

                <select 
                    id="keySelector" 
                    className="block px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-800 text-black dark:text-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-blue-500 sm:text-sm w-[75px] cursor-pointer hover:border-blue-500" 
                    value={selectedKey} 
                    onChange={(e) => {
                        setSelectedKey(e.target.value);
                        setShowChordNumbers(false);
                    }}
                >
                    {chordMap.map((key) => (
                        <option key={key} value={key} className="bg-white dark:bg-gray-700 text-black dark:text-gray-300 cursor-pointer">
                            {key}
                        </option>
                    ))}
                </select>

                <button 
                    className="btn-primary"
                    onClick={() => {
                        setSelectedKey(chordMap[(chordMap.indexOf(selectedKey) - 1 + chordMap.length) % chordMap.length]);
                        setShowChordNumbers(false);
                    }}
                >
                    <Minus className="w-6 h-6" />
                </button>
            </div>
        </div>
    );
};

TransposeKey.propTypes = {
    setSelectedKey: PropTypes.func.isRequired,
    setShowChordNumbers: PropTypes.func.isRequired,
    selectedKey: PropTypes.string.isRequired,
    chordMap: PropTypes.arrayOf(PropTypes.string).isRequired,
};


export default TransposeKey;
  