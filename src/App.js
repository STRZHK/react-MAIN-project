import './App.css';

import {Route, Routes} from "react-router-dom";

import {MoviesList} from "./components";
import {GenreBadge} from "./components";
import MainLayout from "./components/MainLayout/MainLayout";
import ButtonMore from "./components/ButtonMore/ButtonMore";
import TVshows from "./components/TVshows/TVshows";
import Music from "./components/Music/Music";
import Games from "./components/Games/Games";
import Apps from "./components/Apps/Apps";

function App() {


// const loadmore = () => {
//
// }

    return (
      <div>
          <div className={"movies&genres"}>
              <Routes>
                  <Route path={'/'} element={<MainLayout/>}>
                      <Route path={'/movies'} element={<MoviesList/>}></Route>
                      <Route path={'/genres'} element={<GenreBadge/>}></Route>
                      <Route path={'/tvshows'} element={<TVshows/>}></Route>
                      <Route path={'/music'} element={<Music/>}></Route>
                      <Route path={'/games'} element={<Games/>}></Route>
                      <Route path={'/apps'} element={<Apps/>}></Route>
                  </Route>
              </Routes>
              {/*<div className={"btnMoreDiv"}><button className={"btnMore"} onClick={loadmore}>More</button></div>*/}
          </div>
      </div>
  );
}

export default App;
