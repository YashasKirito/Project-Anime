import "./styles.scss";

interface ITile {
  imageUrl: string;
  // malId: number;
  title: string;
}

const Tile: React.FC<ITile> = ({ imageUrl, title }) => {
  return (
    <div className="tile">
      <img src={imageUrl} alt="banner" />
      <span>{title}</span>
    </div>
  );
};

export default Tile;
