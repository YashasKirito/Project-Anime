import Tile from "../../atoms/Tile";
import IAnimeEntry from "../../types/animeEntry";

import "./styles.scss";

interface IResults {
  results: IAnimeEntry[];
}

const Results: React.FC<IResults> = ({ results }) => {
  return (
    <div className="results">
      {results.map((anime) => (
        <Tile
          key={anime.mal_id}
          title={anime.title}
          imageUrl={anime.images.webp.large_image_url}
          malId={anime.mal_id}
        />
      ))}
    </div>
  );
};

export default Results;
