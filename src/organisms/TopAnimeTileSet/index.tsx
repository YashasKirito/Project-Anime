import { useEffect, useState } from "react";
import API from "../../API";
import TileSet from "../../molicules/TileSet";
import IAnimeEntry from "../../types/animeEntry";
import { getTopAnime } from "../../Utils/AnimeApiHelpers";

import "./styles.scss";

const TopAnimeTileSet: React.FC = () => {
  const [data, setData] = useState<IAnimeEntry[]>([]);
  useEffect(() => {
    const { url, params } = getTopAnime();
    API.get(url, params)
      .then((res) => setData(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="tile-list-container">
      <h2>Top Anime</h2>
      <TileSet
        showMore={data.length > 10 ? true : false}
        tiles={data.length > 10 ? data.slice(0, 10) : data}
      />
    </div>
  );
};

export default TopAnimeTileSet;
