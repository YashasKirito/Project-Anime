import TileSet from "../../molicules/TileSet";
import IAnimeEntry from "../../types/animeEntry";

import "./styles.scss";

interface ITopAnimeTileSet {
  animeData: IAnimeEntry[];
  rowTitle: string;
}

const AnimeTileSet: React.FC<ITopAnimeTileSet> = ({ animeData, rowTitle }) => {
  return animeData.length > 0 ? (
    <div className="tile-list-container">
      <h2>{rowTitle}</h2>
      <TileSet
        showMore={animeData.length > 10 ? true : false}
        tiles={animeData.length > 10 ? animeData.slice(0, 10) : animeData}
      />
    </div>
  ) : null;
};

export default AnimeTileSet;
