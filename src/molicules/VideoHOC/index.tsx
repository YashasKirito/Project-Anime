import Video from "../../atoms/Video";
import IAnimeEntry from "../../types/animeEntry";

import "./styles.scss";

interface IVideoHOC {
  animeEntry: IAnimeEntry;
}

const VideoHOC: React.FC<IVideoHOC> = ({ animeEntry }) => {
  return animeEntry ? (
    <div className="video-container-hoc">
      <Video videoId={animeEntry.trailer.youtube_id} />
      <div className="title-container">
        <h1 className="title">{animeEntry.title}</h1>
        <button>More Details</button>
      </div>
    </div>
  ) : null;
};

export default VideoHOC;
