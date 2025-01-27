import PropTypes from "prop-types";

const MusicInformation = ({selectedSong}) => {
  return (
    <div className="container mx-auto mt-8 px-4">
        <div className="bg-white shadow-lg rounded-2xl p-6">
            <h3 className="font-bold mb-4">Credits</h3>
            <div className="text-gray-700 space-y-2">
                <p>
                    <span className="font-semibold">Composer:</span> {selectedSong.composer}
                </p>
                <p>
                    <span className="font-semibold">Album:</span> {selectedSong.album}
                </p>
                <p>
                    <span className="font-semibold">Release Date:</span> {selectedSong.releaseDate}
                </p>
                <p className="text-sm text-gray-600 mt-3">
                    No Copyright Infringement Intended. All rights belong to{" "}
                    <span className="font-medium">{selectedSong.artist}</span>.
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
        album: PropTypes.string.isRequired,
        releaseDate: PropTypes.string.isRequired,
        artist: PropTypes.string.isRequired,
    }).isRequired,
};

export default MusicInformation