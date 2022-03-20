import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div
      style={{
        fontFamily: "Inspiration",
        fontWeight: "bold",
        fontSize: "2rem",
        userSelect: "none",
      }}
    >
      <Link to="/">Anime</Link>
    </div>
  );
};

export default Logo;
