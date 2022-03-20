import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../../API";
import Tile from "../../atoms/Tile";
import VideoHOC from "../../molicules/VideoHOC";
import IAnimeEntry from "../../types/animeEntry";
import { getAnimeById } from "../../Utils/AnimeApiHelpers";

import "./styles.scss";

const AnimePage: React.FC = () => {
  let { animeId } = useParams();
  const [anime, setAnime] = useState<IAnimeEntry | null>(null);
  const [error, setError] = useState(false);
  useEffect(() => {
    if (animeId) {
      const { url, params } = getAnimeById(animeId);
      API.get(url, params)
        .then((res) => setAnime(res.data.data))
        .catch((err) => setError(err));
    }
  }, [animeId]);

  return anime ? (
    <div className="anime-page">
      <VideoHOC animeEntry={anime} />
      <div className="anime-desc">
        <div className="anime-expose">
          <Tile imageUrl={anime.images.webp.large_image_url} />
          <div className="anime-details">
            <h1 className="title">{anime.title}</h1>
            <div className="anime-rating">
              <span className="ratings">
                Score:{" "}
                <span className="accent rating-number">{anime.score}</span>
              </span>
              <span className="ratings">
                Ranked:{" "}
                <span className="accent rating-number">#{anime.rank}</span>
              </span>
              <span className="ratings">
                Popularity:{" "}
                <span className="accent rating-number">
                  #{anime.popularity}
                </span>
              </span>
            </div>
            <div className="data">
              <span className="bold">Episodes: </span> {anime.episodes}
            </div>
            <div className="data">
              <span className="bold">Status: </span> {anime.status}
            </div>
            {/* <div className="data">
            <span className="bold">Aired: </span>{" "}
            {anime.aired.from + anime.aired.to}
          </div> */}
            <div className="data">
              <span className="bold">Genres: </span>{" "}
              {anime.genres.map((genre) => genre.name).join(", ")}
            </div>
          </div>
        </div>
        <div className="synopsys">
          <h2>
            Synopsys<span className="accent">.</span>
          </h2>
          <p>{anime.synopsis}</p>
        </div>
      </div>
    </div>
  ) : (
    <div className="error">
      {error ? "Sorry! Could not find the requested Anime" : "Loading..."}
    </div>
  );
};

export default AnimePage;
