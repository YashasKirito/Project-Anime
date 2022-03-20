import { useState } from "react";
import SearchIcon from "../../assets/icons/Search.svg";

import "./styles.scss";

interface ISearchBar {} // search handler needs to be passed down

const SearchBar: React.FC<ISearchBar> = () => {
  const [input, setInput] = useState("");
  return (
    <div className={input ? "search-bar-show" : "search-bar-hidden"}>
      <input
        onChange={(e) => setInput(e.target.value)}
        type="text"
        value={input}
        placeholder="Type to search anime"
      />
      <img src={SearchIcon} alt="search" />
    </div>
  );
};

export default SearchBar;
