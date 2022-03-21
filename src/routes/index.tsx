import AnimePage from "../pages/AnimePage";
import Home from "../pages/Home";
import Search from "../pages/SearchResults";

export const routes = [
  {
    path: "/",
    Element: Home,
  },
  {
    path: "anime/:animeId",
    Element: AnimePage,
  },
  {
    path: "search",
    Element: Search,
  },
];
