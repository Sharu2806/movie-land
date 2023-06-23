import React, { useEffect, useState } from 'react';
import {
    SmallHeading,
    Container,
    CategoryList,
    Toggle
} from './SortByCategory.style';
import {
    Link,
} from "react-router-dom";


const SortByCategory = ({types}) => {
    const [isChecked, setCkeckboxValue ] = useState(false);
    const [sortByCategory, setSortByCategory] = useState(isChecked ? "tv" : "movie");

    const onChange = () => {
        setCkeckboxValue(!isChecked);
        
    }

    useEffect(() => {
        setSortByCategory(!isChecked ? "movie" :  "tv");
    }, [isChecked]);

    
    const category = (types[0].length !== 0) && types[0].category[sortByCategory];
    const List = types[0].labels.map((type, id) => {
        return <p key={`${type}_${id}`}><Link to={`/discover/${sortByCategory}/${category}=${type}`}>{type}</Link></p>
    });


    return (
        (types[0].length !== 0) ? <Container>
             <SmallHeading>{types[0].heading} 
                <div>
                <span>Movie</span>
                <Toggle>
                    <input type="checkbox" value={isChecked} onChange={onChange} />
                    <div className="slider"></div>
                </Toggle>
                <span>TV Show</span>
            </div>
            </SmallHeading>
            <CategoryList>
                {types[0] && List}
            </CategoryList>
            
        </Container> :
        <></>
    );
}

export default SortByCategory;