import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
  } from "react-router-dom";
import Home from './Home/Home';
import MovieDetails from './MovieDetails/MovieDetails';
import ShowDetails from './ShowsTvDetails/ShowsTvDetails';
import SortedMovieList from "./SortedMovieView/SortedMoviewList";


  export default function App() {
    return (
      <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route  path="/tv/:serialId" element={<ShowDetails />} />
            <Route  path="/movies/:movieId" element={<MovieDetails />} />
            <Route  path="/discover/movie/:with_genres" element={<SortedMovieList type="movie" />} />
            <Route  path="/discover/tv/:with_genres" element={<SortedMovieList type="tv" />} /> 
            <Route  path="/discover/movie/:primary_release_year" element={<SortedMovieList type="movie" />} />
            <Route  path="/discover/tv/:first_air_date_year" element={<SortedMovieList type="tv"/>} /> 
        </Routes>
      </Router>
    );
  }