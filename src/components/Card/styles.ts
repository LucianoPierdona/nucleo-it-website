import styled from "styled-components";

export const CardContainer = styled.div`
  background: #ffffff;
  border-radius: 12px;
  width: 100%;
  text-align: center;
  padding: 3rem 0;
  transition: box-shadow 0.4s;
  & i {
    font-size: 2rem;
    color: #666;
    transition: color 0.4s;
  }
  & h3 {
    color: #142850;
    font-size: 1.5rem;
    transition: color 0.4s;
    font-weight: 700;
    margin-bottom: 0.6rem;
  }
  & p {
    color: #27496d;
    width: 50%;
    font-size: 1rem;
    font-weight: 500;
    margin: 0 auto;
  }
  &:hover {
    box-shadow: 0 -3px 8px rgba(0, 0, 0, 0.1), 0 2px 2px rgba(0, 0, 0, 0.1),
      0 4px 4px rgba(0, 0, 0, 0.1), 0 8px 8px rgba(0, 0, 0, 0.1),
      0 16px 16px rgba(0, 0, 0, 0.1);
  }
  &:hover i,
  &:hover h3 {
    color: #00909e;
  }
  @media (max-width: 500px) {
    padding: 1rem 0;
    align-items: center;
    & p {
      width: 95%;
    }
  }
`;
