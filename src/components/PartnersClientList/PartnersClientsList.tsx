import React from "react";
import { isMobile } from "react-device-detect";
import styled from "styled-components";

const PartnersClientsList: React.FC<{
  top: string;
  mobileTop?: string;
  mediumTop?: string;
}> = ({ top, children, mobileTop, mediumTop }) => {
  const margin_top = isMobile ? mobileTop : top;
  const List = styled.div`
    width: 90%;
    position: absolute;
    left: 65px;
    z-index: 0;
    top: ${margin_top}rem;
    background: #fff;
    padding: 80px 30px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.04), 0 2px 2px rgba(0, 0, 0, 0.04),
      0 4px 4px rgba(0, 0, 0, 0.04), 0 8px 8px rgba(0, 0, 0, 0.04),
      0 16px 16px rgba(0, 0, 0, 0.04);
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 4rem;
    @media (max-width: 1400px) and (min-width: 1280px) {
      top: ${mediumTop}rem;
      left: 37px;
    }
    @media (max-width: 768px) {
      width: 100%;
      left: -30px;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
      top: ${margin_top}rem;
      box-shadow: 0 1px 1px rgba(0, 0, 0, 0), 0 2px 2px rgba(0, 0, 0, 0),
        0 4px 4px rgba(0, 0, 0, 0), 0 8px 8px rgba(0, 0, 0, 0),
        0 16px 16px rgba(0, 0, 0, 0);
    }
  `;
  return <List>{children}</List>;
};

export default PartnersClientsList;
