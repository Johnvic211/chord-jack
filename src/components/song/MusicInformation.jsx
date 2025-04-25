import PropTypes from "prop-types";

const MusicInformation = ({selectedSong}) => {
  return (
    <div className="container mx-auto px-4">
        <div className="bg-white dark:bg-gray-900 shadow-lg rounded-2xl p-6 mt-2">
            <h3 className="font-bold mb-4 dark:text-gray-300">Credits</h3>
            <div className="text-gray-700 dark:text-gray-300 space-y-2">
                {selectedSong.composer && <p><span className="font-semibold">Words & Music by</span> <b>{selectedSong.composer}</b></p>}
                {selectedSong.album && <p><span className="font-semibold">Album:</span> {selectedSong.album}</p>}
                {selectedSong.releaseDate && <p><span className="font-semibold">Release Date:</span> {selectedSong.releaseDate}</p>}
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
                    No Copyright Infringement Intended. All rights belong to {" "}
                    <span className="font-medium">{selectedSong.publisher || selectedSong.artist}</span>.
                </p>
            </div>
        </div>
    </div>
  )
}

// PropTypes for type-checking
MusicInformation.propTypes = {
    selectedSong: PropTypes.shape({
        composer: PropTypes.string.isRequired,
        publisher: PropTypes.string,
        album: PropTypes.string,
        releaseDate: PropTypes.string,
        artist: PropTypes.string.isRequired,
    }).isRequired,
};

export default MusicInformation