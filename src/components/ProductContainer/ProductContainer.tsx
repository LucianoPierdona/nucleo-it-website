import React from "react";
import { isMobile, MobileView } from "react-device-detect";
import { ProductCardContainer } from "./styles";

const ProductContainer = () => {
  const showProduct = isMobile ? "none" : "flex";
  return (
    <>
      <ProductCardContainer>
        <div>
          <h1>Factory</h1>
          <p>
            O Factory é um software de gestão focado para as soluções geradas
            nos empreendimentos industriais dos segmentos metal mecânico,
            moveleiro, plásticos e cooperativas agro industriais.
          </p>
        </div>
        <img
          src="http://nucleosistemas.com.br/images/factory.jpg"
          alt="factory logo"
        />
      </ProductCardContainer>
      <ProductCardContainer style={{ display: `${showProduct}` }}>
        <img
          src="http://nucleosistemas.com.br/images/vendasul.jpg"
          alt="vendasul logo"
        />
        <div>
          <h1>Vendasul</h1>
          <p>
            O Vendasul é um software de gestão de varejo, a solução completa
            para seu negócio. Quer saber o movimento do seu Caixa? Quanto tem no
            seu estoque? Ou qual seu fluxo de Caixa para essa semana? O que você
            está esperando?
          </p>
        </div>
      </ProductCardContainer>
      <ProductCardContainer>
        <MobileView>
          <div>
            <h1>Vendasul</h1>
            <p>
              O Vendasul é um software de gestão de varejo, a solução completa
              para seu negócio. Quer saber o movimento do seu Caixa? Quanto tem
              no seu estoque? Ou qual seu fluxo de Caixa para essa semana? O que
              você está esperando?
            </p>
          </div>
          <img
            src="http://nucleosistemas.com.br/images/vendasul.jpg"
            alt="vendasul logo"
          />
        </MobileView>
      </ProductCardContainer>
      <ProductCardContainer>
        <div>
          <h1>BACO</h1>
          <p>
            O BACO é uma plataforma de soluções para gerenciar toda a cadeia
            produtiva de uva e seus derivados. Inicia na terra, passa pelo
            processo, armazenagem do produto e distribuição. Prioriza, entre
            outros, o custeio, a agilidade e a rastreabilidade. Confira o vídeo
            no nosso canal do Youtube.
          </p>
        </div>
        <img
          src="http://nucleosistemas.com.br/images/baco.jpg"
          alt="baco logo"
        />
      </ProductCardContainer>
      <ProductCardContainer style={{ display: `${showProduct}` }}>
        <img
          src="http://nucleosistemas.com.br/images/merlin.jpg"
          alt="merlin logo"
        />
        <div>
          <h1>Merlin</h1>
          <p>
            O Merlin permite efetuar a integração de sistemas de forma fácil e
            rápida. Crie você mesmo o processo de ETL de sua aplicação. Além
            desta função, você pode gerar relatórios automaticamente buscando
            dados do seu ERP, gerar arquivos e enviá-los via FTP para qualquer
            lugar.
          </p>
        </div>
      </ProductCardContainer>
      <ProductCardContainer>
        <MobileView>
          <div>
            <h1>Merlin</h1>
            <p>
              O Merlin permite efetuar a integração de sistemas de forma fácil e
              rápida. Crie você mesmo o processo de ETL de sua aplicação. Além
              desta função, você pode gerar relatórios automaticamente buscando
              dados do seu ERP, gerar arquivos e enviá-los via FTP para qualquer
              lugar.
            </p>
          </div>
          <img
            src="http://nucleosistemas.com.br/images/merlin.jpg"
            alt="merlin logo"
          />
        </MobileView>
      </ProductCardContainer>
      <ProductCardContainer>
        <div>
          <h1>PowerBI</h1>
          <p>
            O Power BI é uma solução de análise de negócios que permite que você
            visualize seus dados e compartilhe insights em toda a organização ou
            os insira no seu aplicativo ou site. Contrate a Núcleo para
            implementar e conectar centenas de fontes de dados e dê vida aos
            seus dados com dashboards e relatórios.
          </p>
        </div>
        <img
          src="http://nucleosistemas.com.br/images/powerbi.jpg"
          alt="powerbi logo"
        />
      </ProductCardContainer>
      <ProductCardContainer style={{ display: `${showProduct}` }}>
        <img
          src="http://nucleosistemas.com.br/images/tableau.jpeg"
          alt="Tableau logo"
        />
        <div>
          <h1>Tableau</h1>
          <p>
            A Nucleo realiza a implementação do Tableau utilizando profissionais
            qualificados. O Tableau é um software que interage com bancos de
            dados relacionais, OLAP's, computação em nuvem e planilhas para
            gerar gráficos e outras formas de visualização.
          </p>
        </div>
      </ProductCardContainer>
      <ProductCardContainer>
        <MobileView>
          <div>
            <h1>Tableau</h1>
            <p>
              A Nucleo realiza a implementação do Tableau utilizando
              profissionais qualificados. O Tableau é um software que interage
              com bancos de dados relacionais, OLAP's, computação em nuvem e
              planilhas para gerar gráficos e outras formas de visualização.
            </p>
          </div>
          <img
            src="http://nucleosistemas.com.br/images/tableau.jpeg"
            alt="Tableau logo"
          />
        </MobileView>
      </ProductCardContainer>
      <ProductCardContainer>
        <div>
          <h1>Mobdi</h1>
          <p>
            O Mobdi é um software de personalizção de móveis em um ambiente 3D,
            que permite uma imersão completa no cenário para possibilitar o
            usuário ver como seu móvel ficará realmente.
          </p>
        </div>
        <img
          src="http://nucleosistemas.com.br/images/mobdi.jpg"
          alt="mobdi logo"
        />
      </ProductCardContainer>
      <ProductCardContainer style={{ display: `${showProduct}` }}>
        <img src="http://nucleosistemas.com.br/images/kim.jpg" alt="kim logo" />
        <div>
          <h1>KIM</h1>
          <p>
            O KIM é uma plataforma de indicadores de desempenho totalmente web e
            mobile que disponibiliza dados e informações em tempo real para
            gerenciar o seu negócio. Clique e confira a apresentação.
          </p>
        </div>
      </ProductCardContainer>
      <ProductCardContainer>
        <MobileView>
          <div>
            <h1>KIM</h1>
            <p>
              O KIM é uma plataforma de indicadores de desempenho totalmente web
              e mobile que disponibiliza dados e informações em tempo real para
              gerenciar o seu negócio. Clique e confira a apresentação.
            </p>
          </div>
          <img
            src="http://nucleosistemas.com.br/images/kim.jpg"
            alt="kim logo"
          />
        </MobileView>
      </ProductCardContainer>
    </>
  );
};

export default ProductContainer;
