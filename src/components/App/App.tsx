import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import "./App.css";

import { SharedLayout, NotFound } from "src/components";

const HomePage = lazy(() => import("src/pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("src/pages/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() =>
  import("src/pages/MovieDetailsPage/MovieDetailsPage")
);
const Cast = lazy(() => import("src/components/Cast/Cast"));
const Reviews = lazy(() => import("src/components/Reviews/Reviews"));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>

      <ToastContainer autoClose={2200} theme="colored" />
    </>
  );
}

export default App;
