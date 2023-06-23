import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
    Link
  } from "react-router-dom";
import {
    ListItem,
    Container,
    Rating
} from './Category.style';
import settings from '../Helpers/SliderSettings';
import tmdb from '../Helpers/tmdb/GetData';
import { getImagePath } from '../Helpers/helpers';
import { useSelector } from 'react-redux';

const Category = ({type, heading, url}) => {
    const [lists, setMovieDetails] = useState();
    const [isError, setError] = useState('');

    const { myReducer } = useSelector(state => state);
    const { apiKey } = myReducer;

    useEffect(() => {
        const getTopRatedMovies = () => {
            tmdb(apiKey).get(url)
            .then((response) => {
                setMovieDetails(response.data.results);
            }).catch(() => {
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
        <h3>{heading}</h3>
        <Slider {...settings}>
            {lists && lists.map(item => 
                <ListItem key={item.id}>
                    <Link to={`${type}/${item.id}`}>
                        <p>{item.original_title || item.original_name} </p>
                        <img src={getImagePath(item.poster_path)} alt={`${item.original_title}_poster_image`} />
                        <Rating>{Number(item.vote_average).toFixed(1)}</Rating>
                    </Link>
                </ListItem>
            )}
         </Slider>
        </Container>
        
    );
}

export default Category;