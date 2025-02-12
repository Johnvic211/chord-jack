import PropTypes from "prop-types";
import spotify from "../assets/spotify.png";
import youtube from "../assets/youtube.png";
import appleMusic from "../assets/apple-music.svg";
import pdf from "../assets/pdf.png";

const platformIcons = {
    spotify,
    youtube,
    appleMusic,
    pdf,
};

const Url = ({ url, platform }) => {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      <img 
        src={platformIcons[platform]} // Default to 'pdf' if platform is unknown
        alt={`${platform}-icon`} 
        className="w-8 mt-2 mr-3 mb-3" 
      />
    </a>
  );
};

// Define PropTypes
Url.propTypes = {
  url: PropTypes.string.isRequired,       
  platform: PropTypes.oneOf(["spotify", "youtube", "appleMusic", "pdf"]).isRequired,  
};

export default Url;
