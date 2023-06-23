import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    padding: 2rem 12rem;
    column-gap: 30px;
    color: #fff;

    @media (max-width: 991px) {
        padding: 2rem 2rem;
    }

`;

export { Container };