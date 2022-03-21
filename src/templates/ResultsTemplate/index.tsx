import Spin from "../../atoms/Spin";
import Results from "../../molicules/Results";
import IAnimeEntry from "../../types/animeEntry";

import "./styles.scss";

interface IResultsTemplate {
  searchResults?: boolean;
  title?: string;
  results: IAnimeEntry[];
  error?: any;
}

const ResultsTemplate: React.FC<IResultsTemplate> = ({
  searchResults,
  title,
  results,
  error,
}) => {
  return (
    <div className="results-container">
      {title && <span className="results-title">{title}</span>}
      {searchResults && (
        <span className="search-results-title">Top Search Results.</span>
      )}
      {results ? (
        <Results results={results} />
      ) : error ? (
        <span className="error">
          There seems to be an error. Please try again
        </span>
      ) : (
        <Spin />
      )}
    </div>
  );
};

export default ResultsTemplate;
