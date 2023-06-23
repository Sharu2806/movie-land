import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    Heading,
    Container,
    TopSection,
    Main,
    ApiKeyInput
} from './Home.style';
import SortByCategory from '../SortByCategory/SortByCategory';
import Category from '../Category/Category';
import ReactPlayer from 'react-player';
import { setNewApiKey } from '../redux/actions';


const Home = () => {
    const categoryTypeByGenre = [{labels: ['Action', 'Comedy', 'Drama', 'Crime', 'Horror'], heading: "Gener", category:{"movie":"with_genres", "tv": "with_genres"} }];
    const categoryTypeByYear = [{labels: ["1980", "1990", "2000", "2010", "2020"], heading: "Year", category: {"movie": "primary_release_year", "tv": "first_air_date_year"}}];
    const apiKeyFromStore = useSelector(state => state.myReducer);
    
    const [apiKey, setApiKey] = useState(apiKeyFromStore.apiKey);
    const dispatch = useDispatch();

    const onClick = () => dispatch(setNewApiKey(apiKey));
    return (
        <Main>
            <Container>
            <ApiKeyInput>
                <label>Provide Your Api Key</label>
                <input type="text" value={apiKey} onChange={(e) => setApiKey(e.target.value)} />
                <button onClick={onClick}>Update Apikey</button>
            </ApiKeyInput>
            <TopSection>
                <Heading>MovieLand</Heading>
                <ReactPlayer width="100%" url={[
                'https://www.youtube.com/watch?v=qEVUtrk8_B4',
                'https://www.youtube.com/watch?v=eoOaKN4qCKw'
            ]} />
            </TopSection>
            </Container>
            <Category type="tv" heading="Trending TV Shows" url="trending/tv/week" />
            <Category type="movies" heading="Popular" url="movie/popular" />
            <Category type="movies" heading="Top Rated" url="movie/top_rated" />
            <hr></hr>
            <SortByCategory types={[...categoryTypeByGenre]} />
            <SortByCategory types={[...categoryTypeByYear]} />
        </Main>
        
    );
}

export default Home;