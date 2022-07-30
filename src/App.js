import './App.css';

import {Route, Routes} from "react-router-dom";

import MovieList from "./components/MoviesList/MovieList";
import GenreBadge from "./components/GenreBadge/GenreBadge";
import MainLayout from "./components/MainLayout/MainLayout";


function App() {

  return (
      <div>
          <div className={"header"}>
              <Routes>
                  <Route path={'/'} element={<MainLayout/>}>
                      <Route path={'/movies'} element={<MovieList/>}></Route>
                      <Route path={'/genres'} element={<GenreBadge/>}></Route>
                  </Route>
              </Routes>
          </div>
      </div>
  );
}

export default App;
