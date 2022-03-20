import Tile from "../../atoms/Tile";
import IAnimeEntry from "../../types/animeEntry";

import "./styles.scss";

interface ITileSet {
  tiles: IAnimeEntry[];
  showMore?: boolean;
}

const TileSet: React.FC<ITileSet> = ({ tiles, showMore }) => {
  return (
    <div className="tile-set-container">
      {tiles.map((tile) => (
        <Tile
          key={tile.mal_id}
          title={tile.title}
          imageUrl={tile.images.webp.large_image_url}
        />
      ))}
      {showMore && (
        <span
          style={{
            width: "300px",
            padding: "30px",
            fontWeight: "bold",
            color: "gray",
          }}
        >
          Show more.
        </span>
      )}
    </div>
  );
};

export default TileSet;
