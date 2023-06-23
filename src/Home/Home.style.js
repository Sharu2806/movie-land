import styled from 'styled-components';

const Heading = styled.h1`
    font-size: 10rem;
    color: #ef233c;
    background-color: #0d0d0d;
    border-radius: 3rem;
    padding: 2rem;
    margin: 3rem;
    text-align: center;
    font-family: sans-serif;

    @media (max-width: 768px) {
        padding: 1rem;
        margin: 10px 0rem;
        font-size: 2rem;

    }

    @media (min-width: 768px) and (max-width: 1200px) {
        padding: 1rem;
        margin: 10px 0rem;
        font-size: 5rem;
    }
`;

const Container = styled.div`
    margin: 0 6rem;

    @media (max-width: 768px) {
        margin: 0 2rem;
    }
`;

const Button = styled.button`
font-family: sans-serif;
padding: 2rem;
border-radius: 2rem;
border: 10px solid #222222;
font-size: 48px;
color: red;
background-color: #0d0d0d;
border-radius: 40px;
`;


const TopSection = styled.div`
    display: flex;
    flex-direction: column;

    div {
        height: auto;
    }
`;

const Main = styled.main`
    background: radial-gradient(58.3% 50% at 50% 50%, rgb(192, 153, 153) 0%, rgb(134, 12, 12) 100%);
`;

const ApiKeyInput = styled.div`
    display: flex;
    column-gap: 30px;
    justify-content: flex-end;
    margin-top: 30px;

    button {
        padding: 10px;
        border-radius: 20px;
        background: #000;
        color: #fff;
        font-weight: 700;
    }
    
    label {
        padding: 10px;
        color: #fff;
        font-weight: 800;
    }

    @media (max-width: 768px) {
        column-gap: 20px;
        label {
            padding: 5px;
        }
    }

`;

export { Heading, Container, Button, TopSection, Main, ApiKeyInput };