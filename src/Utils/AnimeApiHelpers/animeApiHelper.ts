import { AnimeUrls } from "../../API/urls";

// all these helpers will return url and params which you can then directly pass to Axios
interface IReturnType {
  url: string;
  params: object;
}

type SearchObjectType = {
  q: string; // this is the Search value
  sfw: boolean; // true to filter out Adult entries
  page?: number;
  limit?: number;
  type?: "tv" | "movie" | "ova" | "special" | "ona" | "music";
  status?: "airing" | "complete" | "upcoming";
  score?: number;
  min_score?: number;
  max_score?: number;
  order_by?:
    | "mal_id"
    | "title"
    | "type"
    | "rating"
    | "start_date"
    | "end_date"
    | "episodes"
    | "score"
    | "scored_by"
    | "rank"
    | "popularity"
    | "members"
    | "favorites";
  sort?: "desc" | "asc";
};

// These helpers will format the URL or Params Object as described by the Anime API (Jikan)

export const searchAnime = (params: SearchObjectType) => {
  return { url: AnimeUrls.search, params };
};

export const getAnimeById = (id: string): IReturnType => {
  return { url: AnimeUrls.getAnimeById + "/" + id.toString(), params: {} };
};

// Make it get Top Airing Anime
export const getTopAiringAnime = (): IReturnType => {
  return searchAnime({
    q: "",
    sfw: true,
    order_by: "score",
    sort: "desc",
    status: "airing",
    min_score: 6,
  });
};

// latest episodes are different, needs to be handled differently
export const getLatestEpisodes = (): IReturnType => {
  return { url: AnimeUrls.getWatchRecentEpisodes, params: {} };
};

// No changes here
export const getTopRankedAnime = (): IReturnType => {
  return { url: AnimeUrls.getTopAnime, params: {} };
};

export const getPopularAnime = (): IReturnType => {
  return searchAnime({
    q: "",
    sfw: true,
    order_by: "popularity",
    sort: "asc",
    status: "complete",
    min_score: 6,
  });
};

export const getTopUpcomingAnime = (): IReturnType => {
  return searchAnime({
    q: "",
    sfw: true,
    order_by: "members",
    sort: "desc",
    status: "upcoming",
  });
};
