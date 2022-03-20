import Logo from "../../atoms/Logo";
import SearchBar from "../../molicules/SearchBar";

import "./styles.scss";

const Header: React.FC = () => {
  return (
    <header>
      <Logo /> <SearchBar />
    </header>
  );
};

export default Header;
