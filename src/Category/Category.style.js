import styled from 'styled-components';

const Container = styled.div`
    align-items: center;
    background: radial-gradient(58.3% 50% at 50% 50%, rgb(192 153 153) 0%, rgb(134 12 12) 100%);;
    color: #ffffff;
    padding: 2rem 6rem;
    column-gap: 20px;
    row-gap: 20px;

    h3 {
        font-size: 40px;
        margin: 0px 0px 2rem;
    }

    @media (max-width: 768px) {
        padding: 2rem 2rem;
        column-gap: 20px;
        row-gap: 20px;
        text-align: center;

        h3 {
            font-size: 20px;
        }
    }

    @media (max-width: 991px) {
        padding: 2rem 2rem;
    }
    .slick-list {
        overflow: scroll;
    }
`;



const ListItem = styled.div`
    font-size: 20px;
    font-weight: 700;
    background: black;
    text-align: center;
    border-radius: 2rem;
    text-decoration: none;
    color: white;
    width: auto;

    img {
        transform: translateX(40%);
    }
    p {
        height: 3rem;
        text-wrap: balance;
        padding: 0 2rem;
    }

    a {
        text-decoration: none;
        color: #fff;
    }

    @media (max-width: 991px) {
        img {
            transform: translateX(20%);
        }
    }
    @media (min-width: 991px) and (max-width: 1200px) {
        img {
            transform: translateX(25%);
        }
    }
    @media (max-width:1400) {
        img {
            transform: translateX(25%);
        }
    }
`;

const Rating = styled.span`
    background: #860c0c;
    border-radius: 30px;
    padding: 10px;
    position: relative;
    float: right;
    border: 3px solid #8d90af;
`;

export { Container, ListItem, Rating };