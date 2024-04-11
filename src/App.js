import React from "react";
import { Route, Routes} from "react-router-dom";
import AppLayout from "./Layout/AppLayout";
import HomePage from "./pages/Homepages/HomePage";
import MoviePage from "./pages/Movies/MoviePage";
import MovieDetailPage from "./pages/MovieDetail/MovieDetailPage";
import NotFoundPage from "./pages/NotFound/NotFoundPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


//홈페이지
//영화 전체 목록을 보여주는 페이지
//영화 디테일 페이지

function App() {
  return (
      <Routes>
        <Route path="/" element={<AppLayout/>}>
          <Route index element={<HomePage/>} />
          {/* <Route index element={<MovieDetailPage/>} /> */}
          <Route path="Movies" >
            <Route index element={<MoviePage/>} />
            <Route path=":id" element={<MovieDetailPage />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFoundPage />}/>
      </Routes>

  );
}

export default App;
