import React from "react";
import styled from "styled-components";

interface TitleContainerProps {
  top: string;
  mobileTop?: string;
  mediumTop?: string;
}

const TitleContainer: React.FC<TitleContainerProps> = ({
  children,
  top,
  mobileTop,
  mediumTop,
}) => {
  const ContainerTitle = styled.div`
    width: 100%;
    position: absolute;
    display: flex;
    top: ${top}rem;
    flex-direction: column;
    background: #dae1e7;
    padding-bottom: 180px;
    box-shadow: 0 -4px 16px rgba(0, 0, 0, 0.1), 0 2px 2px rgba(0, 0, 0, 0.04),
      0 4px 4px rgba(0, 0, 0, 0.04), 0 8px 8px rgba(0, 0, 0, 0.04),
      0 16px 16px rgba(0, 0, 0, 0.04);
    @media (max-width: 1400px) and (min-width: 1280px) {
      top: ${mediumTop}rem;
    }
    @media (max-width: 768px) {
      width: 100%;
      margin: 0 auto;
      left: 3.5px;
      top: ${mobileTop}rem;
    }
  `;

  return <ContainerTitle>{children}</ContainerTitle>;
};

export default TitleContainer;
