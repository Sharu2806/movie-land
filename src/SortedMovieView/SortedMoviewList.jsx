import React from 'react';
import {
    useParams
  } from "react-router-dom";
import Category from '../Category/Category';


const SortedMovieList = ({type}) => {
    const params = useParams();


    const myParam = params.with_genres.split("=")[1];
    const category = params.with_genres.split("=")[0];
    
    return (
        <Category type="movies" heading={myParam} url={`discover/${type}?${category}=${myParam}`} />
    )
};

export default SortedMovieList;