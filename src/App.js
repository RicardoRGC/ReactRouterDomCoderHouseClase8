import Header from "./components/Header";
import List from "./components/List";
import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import data from "./data.json";
import ItemDetail from "./components/ItemDetail";

const App = function () {
  const { movies, series } = data;
  return (
    <div>
      <Header />
      <main>
        <nav>
          <NavLink to="/movies" className="NavLink">
            <h3>Movies</h3>
          </NavLink>
          <NavLink to="/series" className="NavLink">
            <h3>Series</h3>
          </NavLink>
        </nav>
        <ul>
          <Routes>
            <Route path="/" element={<p>Bienvenido</p>} />
            <Route path="/series" element={<List list={series} />} />
            <Route path="/movies" element={<List list={movies} />} />
            <Route path="/movies/:name" element={<ItemDetail data={data}  />} />
            <Route path="/series/:name" element={<ItemDetail data={data}/>} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
   
        </ul>
      </main>
    </div>
  );
};

export default App;
