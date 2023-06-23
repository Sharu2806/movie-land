import React, { useEffect, useState } from 'react';
import {
    useParams
  } from "react-router-dom";
import tmdb from '../Helpers/tmdb/GetData';
import { Container } from './ShowsTvDetails.style';
import { useSelector } from 'react-redux';


const MovieDetails = () => {
    const [tvReview, setTvReviews] = useState();
    const [isError, setError] = useState('');
    const params = useParams();
    const { myReducer } = useSelector(state => state);
    const { apiKey } = myReducer;

    useEffect(() => {
        const getTopRatedMovies = () => {
            tmdb(apiKey).get(`tv/${params.serialId}/reviews`)
            .then((response) => {
                setTvReviews(response.data.results[0]);
            }).catch((error) => {
                console.log(error);
                setError(true);
            });
        }
        getTopRatedMovies();
    }, []);

    const { author, author_details, content } = tvReview || {};
    const { name, rating } = author_details || {};

    if (isError) {
        return (
            <h3>Please check your api key</h3>
        )
    };

    return (
        <Container>
           {author && <p><span>Author Name:</span> {author}</p>}
           {name && <p><span>Name:</span> {name}</p>}
           {rating && <p><span>Rating:</span> {rating}</p>}
           {content && <p><span>Reviews:</span> {content}</p>}
        </Container>
        
    );
}

export default MovieDetails;