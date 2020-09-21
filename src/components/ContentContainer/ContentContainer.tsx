import React from "react";
import { isMobile } from "react-device-detect";
import styled from "styled-components";

interface ContentContainerProps {
  top: string;
  zIndex?: string;
  display?: string;
  mobileTop?: string;
  mediumTop?: string;
}

const ContentContainer: React.FC<ContentContainerProps> = ({
  children,
  top,
  zIndex,
  display,
  mobileTop,
  mediumTop,
}) => {
  const haveZIndex = zIndex === "minus" ? -1 : 0;
  const needDisplayFlex = display === "no" ? "block" : "flex";
  const displayMobileOrWeb = isMobile ? "block" : needDisplayFlex;
  const margin_top = isMobile ? mobileTop : top;

  const Container = styled.div`
    width: 90%;
    position: absolute;
    left: 65px;
    background: #fff;
    border-radius: 1.5rem 1.5rem 0 0;
    padding: 80px 30px;
    margin-top: ${margin_top}rem;
    z-index: ${haveZIndex};
    display: ${displayMobileOrWeb};
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.04), 0 2px 2px rgba(0, 0, 0, 0.04),
      0 4px 4px rgba(0, 0, 0, 0.04), 0 8px 8px rgba(0, 0, 0, 0.04),
      0 16px 16px rgba(0, 0, 0, 0.04);
    @media (max-width: 768px) {
      box-shadow: 0 -8px 6px rgba(0, 0, 0, 0.1), 0 2px 2px rgba(0, 0, 0, 0),
        0 4px 4px rgba(0, 0, 0, 0), 0 8px 8px rgba(0, 0, 0, 0),
        0 16px 16px rgba(0, 0, 0, 0);
      width: 100%;
      left: 0;
      width: 100%;
      padding: 10px 0px;
      text-align: center;
      border-radius: 1.5rem 1.5rem 0 0;
    }
    @media (max-width: 1400px) {
      margin-top: ${mediumTop}rem;
    }
  `;

  return <Container>{children}</Container>;
};

export default ContentContainer;
