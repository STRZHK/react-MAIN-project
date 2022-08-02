import './App.css';

import {Route, Routes} from "react-router-dom";

import {MoviesList} from "./components";
import {GenreBadge} from "./components";
import MainLayout from "./components/MainLayout/MainLayout";

function App() {

  return (
      <div>
          {/*<div className={"header"}>*/}
          {/*    <Routes>*/}
          {/*        <Route path={'/'} element={<MainLayout/>}>*/}
          {/*            <Route path={'/movies'} element={<MoviesList/>}></Route>*/}
          {/*            <Route path={'/genres'} element={<GenreBadge/>}></Route>*/}
          {/*        </Route>*/}
          {/*    </Routes>*/}
          {/*</div>*/}

          {/*<MoviesList/>*/}

          <GenreBadge/>
          <MoviesList/>
      </div>
  );
}

export default App;
