import { useEffect, useState } from "react";
import API from "../../API";
import Video from "../../atoms/Video";
import TopAnimeTileSet from "../../organisms/TopAnimeTileSet";
import IAnimeEntry from "../../types/animeEntry";
import { getTrendingAnime } from "../../Utils/AnimeApiHelpers";

const Home: React.FC = () => {
  const [data, setData] = useState<IAnimeEntry[]>([]);
  useEffect(() => {
    const { url, params } = getTrendingAnime();
    API.get(url, params)
      .then((res) => setData(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  const videoId = data[0]?.trailer?.youtube_id;

  return (
    <div>
      <Video videoId={videoId} />
      <TopAnimeTileSet animeData={data} />
    </div>
  );
};

export default Home;
