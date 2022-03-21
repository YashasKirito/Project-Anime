import { createContext, useContext, useEffect, useState } from "react";
import API from "../../API";
import IAnimeEntry from "../../types/animeEntry";
import { getTopAiringAnime } from "../../Utils/AnimeApiHelpers";

type ISearch = {
  searchValue: string;
  updateSearchValue: (searchValue: string) => void;
};

const Search = createContext<ISearch>({} as ISearch);

export const SearchContext: React.FC = ({ children }) => {
  const [searchText, setSearchText] = useState("");

  const updateSearchValue = (search: string) => setSearchText(search);

  return (
    <Search.Provider value={{ searchValue: searchText, updateSearchValue }}>
      {children}
    </Search.Provider>
  );
};

// custom hook
export const useSearch = (): ISearch => useContext(Search);
