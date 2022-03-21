import { useState } from "react";
import { useLocation } from "react-router-dom";
import SearchIcon from "../../assets/icons/Search.svg";

import "./styles.scss";

interface ISearchBar {
  searchValue: string;
  updateSearchValue: (searchValue: string) => void;
} // search handler needs to be passed down

const SearchBar: React.FC<ISearchBar> = ({
  searchValue,
  updateSearchValue,
}) => {
  const location = useLocation();
  const isSearchPage = location.pathname === "/search";
  return (
    <div
      className={
        isSearchPage
          ? "search-bar-show"
          : searchValue
          ? "search-bar-show"
          : "search-bar-hidden"
      }
    >
      <input
        onChange={(e) => updateSearchValue(e.target.value)}
        type="text"
        value={searchValue}
        placeholder="Type to search anime"
      />
      <img src={SearchIcon} alt="search" />
    </div>
  );
};

export default SearchBar;
