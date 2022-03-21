import { useNavigate } from "react-router-dom";
import Spin from "../../atoms/Spin";
import Video from "../../atoms/Video";
import IAnimeEntry from "../../types/animeEntry";

import "./styles.scss";

interface IVideoHOC {
  animeEntry: IAnimeEntry;
  showTitle?: boolean;
}

const VideoHOC: React.FC<IVideoHOC> = ({ animeEntry, showTitle }) => {
  let navigate = useNavigate();

  const onClick = () => {
    navigate(`anime/${animeEntry.mal_id}`);
  };
  return animeEntry ? (
    <div className="video-container-hoc">
      <Video videoId={animeEntry.trailer.youtube_id} />
      {showTitle && (
        <div className="title-container">
          <h1 className="title">{animeEntry.title}</h1>
          <button onClick={onClick}>More Details</button>
        </div>
      )}
    </div>
  ) : (
    <Spin />
  );
};

export default VideoHOC;
