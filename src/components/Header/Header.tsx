import React from "react";
import {
  CenterHeader,
  HeaderContainer,
  HeaderPage,
  LeftHeader,
  RightHeader,
} from "./styles";
const Header = () => {
  // eslint-disable-next-line
  return (
    <HeaderPage>
      <HeaderContainer>
        <LeftHeader>
          <a href={"# "}>Início</a>
          <a href={"#products "}>Produtos</a>
          <a href={"#about "}>Sobre</a>
          <a href={"#contact "}>Contato</a>
        </LeftHeader>
        <CenterHeader>
          <img
            src="http://nucleosistemas.com.br/images/logotrans.png"
            alt="logo"
          />
        </CenterHeader>
        <RightHeader>
          <a href={"/https://www.instagram.com/nucleosistemas "}>
            <i className="fab fa-instagram"></i>
          </a>
          <a href={"/https://www.facebook.com/nucleosistemas/?ref=br_rs "}>
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href={
              "/https://www.linkedin.com/company/n-cleo-sistemas/?originalSubdomain=pt "
            }
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </RightHeader>
      </HeaderContainer>
    </HeaderPage>
  );
};

export default Header;
