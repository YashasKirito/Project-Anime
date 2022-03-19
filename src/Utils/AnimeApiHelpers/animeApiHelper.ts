// all these helpers will return url and params which you can then directly pass to Axios
interface IReturnType {
  url: string;
  params: object;
}

// These helpers will format the URL or Params Object as described by the Anime API (Jikan)

export const getAnimeById = (url: string, id: number): IReturnType => {
  return { url: url + id.toString(), params: {} };
};
