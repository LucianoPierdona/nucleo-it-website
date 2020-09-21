import styled from "styled-components";

export const CompanyList = styled.div`
  width: 40%;
  & h1 {
    color: #142850;
    margin-bottom: 15px;
  }
  @media (max-width: 1400px) {
    width: 70%;
  }
  @media (max-width: 768px) {
    margin-top: 28px;
    width: 100%;
  }
`;

export const CompanyCard = styled.div`
  background-color: #999;
  margin-bottom: 20px;
  padding: 20px;
  width: 90%;
  text-align: left;
  border-radius: 12px;
  background-color: #fff;
  cursor: pointer;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.04), 0 2px 2px rgba(0, 0, 0, 0.04),
    0 4px 4px rgba(0, 0, 0, 0.04), 0 8px 8px rgba(0, 0, 0, 0.04),
    0 16px 16px rgba(0, 0, 0, 0.04);
  transition: 0.4s;
  & h1 {
    color: #142850;
    font-size: 27px;
  }
  & ul li {
    list-style-type: none;
    color: #27496d;
    font-size: 17px;
    font-weight: 500;
  }
  & ul li i {
    margin-right: 8px;
  }
  &:hover {
    box-shadow: 0 -2px 50px rgba(0, 0, 0, 0.8);
    background: #142850;
  }
  &:hover h1 {
    color: #fff;
  }
  &:hover ul li {
    color: #999;
  }
  @media (max-width: 1400px) {
  }
  @media (max-width: 768px) {
    margin: 0 auto;
    margin-bottom: 20px;
  }
`;

export const MapContainer = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  margin-left: 15rem;
  & h1 {
    color: #142850;
    font-size: 27px;
  }
  @media (max-width: 1400px) {
    margin-top: 50px;
    width: 60%;
    margin-left: 0;
    align-items: center;
  }
  @media (max-width: 768px) {
    width: 95%;
    display: block;
    margin: 0 auto;
    & iframe {
      width: 100%;
    }
  }
`;

export const MapView = styled.iframe`
  width: 100%;
  text-align: center;
  align-items: center;
`;
