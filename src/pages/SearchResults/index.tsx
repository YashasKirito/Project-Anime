import { useCallback, useEffect, useState } from "react";
import API from "../../API";
import Spin from "../../atoms/Spin";
import { useSearch } from "../../hooks/context/useSearch";
import ResultsTemplate from "../../templates/ResultsTemplate";
import IAnimeEntry from "../../types/animeEntry";
import { searchAnime } from "../../Utils/AnimeApiHelpers";
import { debounce } from "../../Utils/debounce";

import "./styles.scss";

const Search: React.FC = () => {
  const [anime, setAnime] = useState<IAnimeEntry[]>([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const search = useSearch();

  const handleSearch = useCallback(
    debounce((url, params) => {
      setLoading(true);
      API.get(url, params)
        .then((res) => setAnime(res.data.data))
        .catch((err) => setError(err))
        .finally(() => setLoading(false));
    }, 2000),
    []
  );

  useEffect(() => {
    const { url, params } = searchAnime({ q: search.searchValue, sfw: true });
    handleSearch(url, params);
  }, [search.searchValue]);
  return (
    <div className="search-container">
      {loading ? (
        <Spin />
      ) : (
        <ResultsTemplate searchResults={true} error={error} results={anime} />
      )}
    </div>
  );
};

export default Search;
