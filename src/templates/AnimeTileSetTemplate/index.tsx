import { useEffect, useState } from "react";
import API from "../../API";
import AnimeTileSet from "../../organisms/AnimeTileSet";
import IAnimeEntry from "../../types/animeEntry";

export interface IAnimeTileRow {
  title: string;
  url: string;
  params: object;
}

interface IAnimeTileSetTemplate {
  tileSets: IAnimeTileRow[];
}

const AnimeTileRow: React.FC<IAnimeTileRow> = ({ title, url, params }) => {
  const [animes, setAnimes] = useState<IAnimeEntry[]>([]);
  useEffect(() => {
    API.get(url, params).then((res) => setAnimes(res.data.data));
  }, []);

  return <AnimeTileSet rowTitle={title} animeData={animes} />;
};

const AnimeTileSetTemplate: React.FC<IAnimeTileSetTemplate> = ({
  tileSets,
}) => {
  return (
    <>
      {tileSets.map((tileSet) => (
        <AnimeTileRow key={tileSet.title} {...tileSet} />
      ))}
    </>
  );
};

export default AnimeTileSetTemplate;
