import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { routes } from "./routes";

function App() {
  return (
    <div className="App">
      <Routes>
        {routes.map((route) => (
          <Route path={route.path} element={<route.Element />} />
        ))}
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
