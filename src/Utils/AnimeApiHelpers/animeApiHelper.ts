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
};

// These helpers will format the URL or Params Object as described by the Anime API (Jikan)

export const searchAnime = (params: SearchObjectType) => {
  return { url: AnimeUrls.search, params };
};

export const getAnimeById = (id: number): IReturnType => {
  return { url: AnimeUrls.getAnimeById + "/" + id.toString(), params: {} };
};

export const getTrendingAnime = (): IReturnType => {
  return { url: AnimeUrls.getSeasonNow, params: {} };
};

export const getLatestEpisodes = (): IReturnType => {
  return { url: AnimeUrls.getWatchRecentEpisodes, params: {} };
};

export const getTopAnime = (): IReturnType => {
  return { url: AnimeUrls.getTopAnime, params: {} };
};
