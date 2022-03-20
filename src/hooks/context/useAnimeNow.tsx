import { createContext, useContext, useEffect, useState } from "react";
import API from "../../API";
import IAnimeEntry from "../../types/animeEntry";
import { getTrendingAnime } from "../../Utils/AnimeApiHelpers";

type IAnimeNow = {
  animeEntries: IAnimeEntry[];
};

const AnimeNow = createContext<IAnimeNow>({} as IAnimeNow);

export const AnimeNowContext: React.FC = ({ children }) => {
  const [animeEntries, setAnimeEntries] = useState<IAnimeEntry[]>([]);

  useEffect(() => {
    const { url, params } = getTrendingAnime();
    animeEntries.length === 0 &&
      API.get(url, params)
        .then((res) => setAnimeEntries(res.data.data))
        .catch((err) => console.log(err));
  }, []);

  return (
    <AnimeNow.Provider value={{ animeEntries }}>{children}</AnimeNow.Provider>
  );
};

// custom hook
export const useAnimeNow = (): IAnimeNow => useContext(AnimeNow);
