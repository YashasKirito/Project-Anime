import TileSet from "../../molicules/TileSet";
import IAnimeEntry from "../../types/animeEntry";

import "./styles.scss";

interface ITopAnimeTileSet {
  animeData: IAnimeEntry[];
}

const TopAnimeTileSet: React.FC<ITopAnimeTileSet> = ({ animeData }) => {
  return (
    <div className="tile-list-container">
      <h2>Top Anime</h2>
      <TileSet
        showMore={animeData.length > 10 ? true : false}
        tiles={animeData.length > 10 ? animeData.slice(0, 10) : animeData}
      />
    </div>
  );
};

export default TopAnimeTileSet;
