import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

const API_KEY = "5cbb87aef27f9b4333ebebc944ad48bd";

const params = {
  api_key: API_KEY,
  language: "en-US",
};

export const fetchTrendingMovies = async (abort) => {
  const response = await axios.get("/trending/movie/day", {
    params,
    signal: abort,
  });
  return response.data;
};

export const fetchMovieSearch = async (query, abort) => {
  const response = await axios.get(`/search/movie?query=${query}`, {
    params,
    signal: abort,
  });

  return response.data.results;
};

export const fetchMovieDetail = async (id, abort) => {
  const response = await axios.get(`/movie/${id}`, {
    params,
    signal: abort,
  });
  return response.data;
};

export const fetchMovieCast = async (id, abort) => {
  const response = await axios.get(`/movie/${id}/credits`, {
    params,
    signal: abort,
  });

  return response.data.cast;
};

export const fetchMovieReviews = async (id, abort) => {
  const response = await axios.get(`/movie/${id}/reviews`, {
    params,
    signal: abort,
  });

  return response.data.results;
};
