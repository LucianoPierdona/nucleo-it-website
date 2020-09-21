import styled from "styled-components";

export const BannerText = styled.div`
  margin-top: 250px;
  width: 50%;
  text-align: center;
  & h1 {
    color: #142850;
    font-size: 2.5rem;
    width: 75%;
    margin: 0 auto 25px auto;
  }
  & p {
    width: 75%;
    margin: 0 auto;
    font-size: 1.7rem;
    color: #00909e;
  }
  @media (max-width: 1400px) {
    margin: 50px auto;
    & h1 {
      width: 75%;
    }
    & p {
      font-size: 1.5rem;
    }
  }
  @media (max-width: 768px) {
    width: 90%;
    margin: 30px auto;
    text-align: center;
    & h1 {
      font-size: 2rem;
      width: 100%;
    }
    & p {
      width: 100%;
      font-size: 1.5rem;
    }
  }
`;

export const BannerImage = styled.div`
  width: 45%;
  height: auto;
  margin-top: 3rem;
  margin-right: 3rem;
  @media (max-width: 768px) {
    width: 100%;
    margin-right: 0;
    margin-top: 30px;
    height: 15px;
    & img {
      margin-top: 75px;
    }
  }
`;

export const HeaderContainer = styled.div`
  text-align: center;
  width: 50%;
  margin: 0 auto;
  margin-top: 6rem;
  & h3 {
    color: #27496d;
    font-size: 2.5rem;
    width: 80%;
    margin: 0 auto 25px auto;
  }
  & p {
    width: 75%;
    margin: 0 auto;
    font-size: 1.5rem;
    color: #00909e;
  }
  & span {
    font-size: 12px;
    color: #444;
  }
  & i {
    margin-right: 15px;
  }
  & a {
    color: #142850;
    padding: 1rem 2rem;
    background: #00909e;
    border-radius: 12px;
    font-size: 25px;
    transition: color ease-in 0.2s;
  }
  & a:hover {
    background: #142850;
    color: #dae1e7;
  }
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 0;
    & p {
      width: 95%;
    }
  }
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  padding: 80px 30px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 30px 10px;
    margin-top: 24.5rem;
  }
`;

export const CompanyMeta = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr;
  gap: 2rem 7rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    margin-top: 35px;
  }
`;

export const CompanyCard = styled.div`
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8);
  background: #142850;
  color: #dae1e7;
  padding: 3rem 1rem;
  text-align: center;
  transition: ease-in 0.2s;
  cursor: pointer;
  &:hover {
    box-shadow: 0 -2px 50px rgba(0, 0, 0, 0.8);
    background: #dae1e7;
    color: #142850;
  }
  & h1 {
    font-size: 25px;
  }
  & p {
    width: 70%;
    margin: 0 auto;
  }
  @media (max-width: 768px) {
    width: 90%;
    margin: 0 auto;
    & i {
      font-size: 22px;
    }
    & h1 {
      font-size: 30px;
    }
    & p {
      width: 90%;
    }
  }
`;

export const QuoteMessage = styled.div`
  text-align: center;
  width: 40%;
  margin: 12rem auto 2rem auto;
  & i {
    font-size: 35px;
    color: #00909e;
  }
  & p {
    font-size: 32px;
    color: #666;
    font-weight: 400;
    margin-bottom: 15px;
  }
  & span {
    font-style: italic;
    color: #666;
  }
  & span strong {
    color: #27496d;
    font-weight: 700;
  }
  @media (max-width: 1400px) {
    width: 60%;
    & p {
      width: 100%;
    }
  }
  @media (max-width: 768px) {
    width: 95%;
    margin-bottom: 55px;
    margin-left: 0;
  }
`;

export const FooterContainer = styled.div`
  width: 90%;
  position: absolute;
  left: 65px;
  top: 898rem;
  margin-bottom: 150px;
  background: #fff;
  border-radius: 1.5rem;
  padding: 80px 30px;
  padding-bottom: 80px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.04), 0 2px 2px rgba(0, 0, 0, 0.04),
    0 4px 4px rgba(0, 0, 0, 0.04), 0 8px 8px rgba(0, 0, 0, 0.04),
    0 16px 16px rgba(0, 0, 0, 0.04);
  text-align: center;
  & h1 {
    color: #27496d;
    width: 30%;
    margin: 0 auto;
    font-size: 15px;
    padding-bottom: 3px;
    border-bottom: 1px solid #999;
  }
  & span {
    margin-top: 5px;
    color: #142850;
    font-size: 20px;
  }
  @media (max-width: 1400px) {
    top: 757rem;
    left: 37px;
  }
  @media (max-width: 768px) {
    top: 945rem;
    left: -37px;
    margin-bottom: 0;
    width: 100%;
    & h1 {
      width: 70%;
    }
  }
`;
