import { useNavigate } from "react-router-dom";
import "./styles.scss";

interface ITile {
  imageUrl: string;
  malId?: number | string;
  title?: string;
}

const Tile: React.FC<ITile> = ({ imageUrl, title, malId }) => {
  let navigate = useNavigate();

  const onClick = () => {
    navigate(`anime/${malId}`);
  };

  return (
    <div onClick={malId ? onClick : () => null} className="tile">
      <img src={imageUrl} alt="banner" />
      {title && (
        <>
          <div className="blur"></div>
          <span>{title}</span>
        </>
      )}
    </div>
  );
};

export default Tile;
