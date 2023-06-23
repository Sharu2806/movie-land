import styled from 'styled-components';

const SmallHeading = styled.h2`
    font-size: 48px;
    margin: 0 0 2rem 0;
    display: flex;
    justify-content: space-between;

    span {
        font-size: 16px;
        padding: 10px;
    }

    @media (max-width: 768px) {
      
      flex-direction: column;
      font-size: 20px;
    }

    
`;

const Container = styled.div`
    align-items: center;
    color: #ffffff;
    padding: 2rem 12rem;

    @media (max-width: 768px) {
      padding: 2rem;
    }

    @media (max-width: 991px) {
      padding: 2rem;
    }
`;



const CategoryList = styled.div`
    display: flex;
    p {
        flex: 1 1;
        margin: 0;
        font-size: 20px;
        font-weight: 700;
    }

    a {
      color: #fff;
      padding: 10px;
      border-radius:20px;
      text-decoration: none;
      background-color: #511f1f;

    }

    @media (max-width: 768px) {
      flex-direction: row;
      flex-wrap: wrap;
      column-gap: 15px;
      p {
        font-size: 10px;
      }
      a {
        padding: 5px;
      }
    }
`;

const Toggle = styled.label`
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
    outline: none;
    transform: translateY(10px);

  input {
    position: absolute;
  }
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 34px;
  }
  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 50%;
  }
  input:checked + .slider {
    background-color: #2196F3;
  }
  input:focus + .slider {
    box-shadow: 0 0 1px #2196F3;
  }
  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
`;

export { Container, SmallHeading, CategoryList, Toggle };