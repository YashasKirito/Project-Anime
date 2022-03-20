import Video from "../../atoms/Video";
import IAnimeEntry from "../../types/animeEntry";

import "./styles.scss";

interface IVideoHOC {
  animeEntry: IAnimeEntry;
  showTitle?: boolean;
}

const VideoHOC: React.FC<IVideoHOC> = ({ animeEntry, showTitle }) => {
  return animeEntry ? (
    <div className="video-container-hoc">
      <Video videoId={animeEntry.trailer.youtube_id} />
      {showTitle && (
        <div className="title-container">
          <h1 className="title">{animeEntry.title}</h1>
          <button>More Details</button>
        </div>
      )}
    </div>
  ) : null;
};

export default VideoHOC;
