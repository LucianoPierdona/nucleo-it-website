import styled from "styled-components";

export const Card = styled.div`
  background: #eaedf0;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.04), 0 2px 2px rgba(0, 0, 0, 0.04),
    0 4px 4px rgba(0, 0, 0, 0.04), 0 8px 8px rgba(0, 0, 0, 0.04),
    0 16px 16px rgba(0, 0, 0, 0.04);
  padding: 2rem;
  & img {
    width: 100%;
  }
  & a {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
  }
`;
