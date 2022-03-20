import Video from "../../atoms/Video";
import { useAnimeNow } from "../../hooks/context/useAnimeNow";
import VideoHOC from "../../molicules/VideoHOC";
import TopAnimeTileSet from "../../organisms/TopAnimeTileSet";

const Home: React.FC = () => {
  const animeNow = useAnimeNow();

  const getVideoTrailer = () => {
    const newArray = animeNow.animeEntries.filter(
      (anime) => anime.trailer.youtube_id !== null
    );
    return newArray[Math.floor(Math.random() * newArray.length)];
  };

  const animeEntry = getVideoTrailer();

  return (
    <div>
      <VideoHOC animeEntry={animeEntry} />
      <TopAnimeTileSet animeData={animeNow.animeEntries} />
    </div>
  );
};

export default Home;
