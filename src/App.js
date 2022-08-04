import './App.css';

import {Link, Route, Routes} from "react-router-dom";

import {MoviesList} from "./components";
import {GenreBadge} from "./components";
import MainLayout from "./components/MainLayout/MainLayout";
import TVshows from "./components/TVshows/TVshows";
import Music from "./components/Music/Music";
import Games from "./components/Games/Games";
import Apps from "./components/Apps/Apps";

function App() {


    return (
      <div>
          <div className={"initialPage"}><Link to={'/'}>Initial Page</Link></div>
          <div className={"movies&genres"}>
              <Routes>
                  <Route path={'/'} element={<MainLayout/>}>
                      <Route path={'/movies'} element={<MoviesList/>}/>
                      <Route path={'/genres'} element={<GenreBadge/>}/>
                      <Route path={'/tvshows'} element={<TVshows/>}/>
                      <Route path={'/music'} element={<Music/>}/>
                      <Route path={'/games'} element={<Games/>}/>
                      <Route path={'/apps'} element={<Apps/>}/>
                  </Route>
              </Routes>
          </div>
      </div>
  );
}

export default App;
