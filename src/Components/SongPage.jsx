import { useParams } from "react-router-dom";
import SongTransposer from "./SongTransposer";
import MusicInformation from "./MusicInformation";
import SongSelector from "./SongSelector";
import songBank from '../data/songBank';

const SongPage = () => {
    const { title } = useParams();
    const selectedSong = songBank.find((song) => song.title.toLowerCase() === decodeURIComponent(title || "").toLowerCase());

    return (
        <>
            {/* Song Selector always visible */}
            <SongSelector songBank={songBank} />

            {/* Show song info if found, otherwise a message only if a title was searched */}
            {title ? (
                selectedSong ? (
                    <>
                        <SongTransposer selectedSong={selectedSong} page="select" />
                        <MusicInformation selectedSong={selectedSong} />
                    </>
                ) : (
                    <p className="text-red-500">Song not found.</p>
                )
            ) : ''}
        </>
    );
};

export default SongPage;
