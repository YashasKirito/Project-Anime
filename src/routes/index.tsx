import AnimePage from "../pages/AnimePage";
import Home from "../pages/Home";

export const routes = [
  {
    path: "/",
    Element: Home,
  },
  {
    path: "anime/:animeId",
    Element: AnimePage,
  },
];
