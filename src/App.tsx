import "./App.scss";
import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import Header from "./organisms/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.Element />}
          />
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
