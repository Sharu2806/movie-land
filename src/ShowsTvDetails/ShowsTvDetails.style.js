import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    padding: 2rem 8rem;
    flex-direction: column;
    color: #fff;

    p {
        span {
            min-width: 10%;
            font-weight:800;
        }
        display: flex;
    }

    @media (min-width: 425px) and (max-width: 768px) {
        padding: 2rem 2rem;

        p {
            span {
                min-width: 20%;
            }
        }

    }

    @media (max-width: 425px) {
        padding: 2rem 2rem;

        p {
            span {
                min-width: 40%;
            }
        }
    }

    

    @media (min-width: 768px) and (max-width: 1200px) {
        padding: 2rem 2rem;

        p {
            span {
                min-width: 15%;
            }
        }
    }


`;

export { Container };