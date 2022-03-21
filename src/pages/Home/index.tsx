import { useEffect, useState } from "react";
import API from "../../API";
import VideoHOC from "../../molicules/VideoHOC";
import AnimeTileSet from "../../organisms/AnimeTileSet";
import AnimeTileSetTemplate, {
  IAnimeTileRow,
} from "../../templates/AnimeTileSetTemplate";
import IAnimeEntry from "../../types/animeEntry";
import {
  getPopularAnime,
  getTopAiringAnime,
  getTopUpcomingAnime,
} from "../../Utils/AnimeApiHelpers";

const Home: React.FC = () => {
  const [animeNow, setAnimeNow] = useState<IAnimeEntry[]>([]);

  useEffect(() => {
    const { url, params } = getTopUpcomingAnime();
    API.get(url, params).then((res) => setAnimeNow(res.data.data));
  }, []);

  const getVideoTrailer = () => {
    const newArray = animeNow.filter(
      (anime) => anime.trailer.youtube_id !== null
    );
    return newArray[Math.floor(Math.random() * newArray.length)];
  };

  const animeEntry = getVideoTrailer();

  // this can be later moved to a config
  const tileSets: IAnimeTileRow[] = [
    {
      title: "Top Airing Anime",
      ...getTopAiringAnime(),
    },
    {
      title: "Most Popular Anime",
      ...getPopularAnime(),
    },
    // Commenting this because I am rate limited (by Backend - Jikan)
    // to only make 3 API calls per second :sob:
    // {
    //   title: "Top Ranked Anime",
    //   ...getTopRankedAnime(),
    // },
  ];

  return (
    <div>
      <VideoHOC animeEntry={animeEntry} showTitle />
      <AnimeTileSet rowTitle="Top Upcoming Anime" animeData={animeNow} />
      <AnimeTileSetTemplate tileSets={tileSets} />
    </div>
  );
};

export default Home;
