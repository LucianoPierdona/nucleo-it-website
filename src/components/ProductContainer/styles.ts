import styled from "styled-components";

export const ProductCardContainer = styled.div`
  display: flex;
  width: 90%;
  margin: 5rem auto 2rem auto;
  align-items: center;

  & div {
    width: 50%;
    margin: 0 auto;
    text-align: center;
  }

  & h1 {
    color: #142850;
    font-size: 2.5rem;
    transition: color 0.4s;
    font-weight: 700;
    margin-bottom: 0.6rem;
  }

  & p {
    width: 50%;
    margin: 0 auto;
    font-size: 1.5rem;
    color: #00909e;
  }

  & img {
    width: 50%;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.04), 0 2px 2px rgba(0, 0, 0, 0.04),
      0 4px 4px rgba(0, 0, 0, 0.04), 0 8px 8px rgba(0, 0, 0, 0.04),
      0 16px 16px rgba(0, 0, 0, 0.04);
  }
  @media (max-width: 1400px) and (min-width: 1280px) {
    & p {
      width: 85%;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    display: block;
    text-align: center;
    margin: 5rem 0;
    & div {
      width: 100%;
    }
    & .BrowserOnly {
      display: none;
    }
    & p {
      width: 100%;
    }
    & img {
      margin-top: 19px;
      width: 90%;
      border-radius: 1rem;
    }
  }
`;
