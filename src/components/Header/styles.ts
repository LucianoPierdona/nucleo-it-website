import styled from "styled-components";

export const HeaderPage = styled.nav`
  background-color: #00909e;
  padding-top: 2rem;
  height: 15rem;
  border-radius: 0 0 1.5rem 1.5rem;
  width: 100%;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.04), 0 2px 2px rgba(0, 0, 0, 0.04),
    0 4px 4px rgba(0, 0, 0, 0.04), 0 8px 8px rgba(0, 0, 0, 0.04),
    0 16px 16px rgba(0, 0, 0, 0.04);
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const HeaderContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  font-size: 20px;
`;

export const LeftHeader = styled.div`
  & a {
    margin-right: 5px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const CenterHeader = styled.div`
  justify-content: center;
  margin-top: -10px;
  width: 21%;
  & img {
    width: 90px;
    height: 60px;
  }
`;

export const RightHeader = styled.div`
  & a {
    font-size: 25px;
    margin-left: 5px;
  }
`;
