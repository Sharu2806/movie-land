import React, { useEffect, useState } from 'react';
import {
    useParams
  } from "react-router-dom";
import { getImagePath } from '../Helpers/helpers';
import tmdb from '../Helpers/tmdb/GetData';
import { Container } from './MoviesDetails.style';
import { useSelector } from 'react-redux';


const MovieDetails = () => {

    const [movieDetails, setMovieDetails] = useState();
    const [isError, setError] = useState('');
    const params = useParams();
    const { myReducer } = useSelector(state => state);
    const { apiKey } = myReducer;

    useEffect(() => {
        const getTopRatedMovies = () => {
            tmdb(apiKey).get(`movie/${params.movieId}`)
            .then((response) => {
                setMovieDetails(response.data);
            }).catch((error) => {
                console.log(error);
                setError(true);
            });
            
        }
        getTopRatedMovies();
    }, []);


    if (isError) {
        return (
            <h3>Please check your api key</h3>
        )
    };

    return (
        <Container>
            {movieDetails &&
            <>
            <img src={getImagePath(movieDetails.poster_path)} alt={`${movieDetails.original_title}_poster_path`} />
            <div>
                    <h2>{movieDetails.original_title}</h2>
                    <p>{movieDetails.tagline}</p>
                    <div>
                        <h3>Overview</h3>
                        <p>{movieDetails.overview}</p>
                    </div>
                </div>
                </>
            }
        </Container>
        
    );
}

export default MovieDetails;