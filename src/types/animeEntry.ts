interface IAnimeEntry {
  mal_id: number;
  url: string;
  images: {
    image_url: string;
    small_image_url: string;
    large_image_url: string;
  };
  trailer: {
    youtube_id: string;
  };
  title: string;
  title_english: string;
  title_japanese: string;
  title_synonyms: string[];
  type: string;
  source: string;
  episodes: number;
  status: string;
  airing: true;
  aired: {
    from: string;
    to: string;
  };
  duration: string;
  rating: string;
  score: number;
  scored_by: number;
  rank: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string;
  background: string;
  season: string;
  year: number;
}

export default IAnimeEntry;
