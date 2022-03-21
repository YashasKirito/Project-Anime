import { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "../../atoms/Logo";
import { useSearch } from "../../hooks/context/useSearch";
import SearchBar from "../../molicules/SearchBar";
import { debounce } from "../../Utils/debounce";

import "./styles.scss";

const Header: React.FC = () => {
  const search = useSearch();
  const location = useLocation();
  const navigate = useNavigate();

  const handleSearchRedirect = useCallback(
    debounce(() => {
      navigate("/search");
    }, 1000),
    []
  );

  useEffect(() => {
    if (search.searchValue && location.pathname !== "/search") {
      handleSearchRedirect();
    }
  }, [search.searchValue]);

  return (
    <header>
      <Logo />
      <SearchBar
        searchValue={search.searchValue}
        updateSearchValue={search.updateSearchValue}
      />
    </header>
  );
};

export default Header;
