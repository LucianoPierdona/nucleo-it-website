import React from "react";
import ContentContainer from "../ContentContainer/ContentContainer";
import Header from "../Header/Header";
import vrImg from "../../assets/images/vr.svg";
import {
  BannerImage,
  BannerText,
  CardGrid,
  CompanyCard,
  CompanyMeta,
  FooterContainer,
  HeaderContainer,
  QuoteMessage,
} from "./styles";
import TitleContainer from "../TitleContainer/TitleContainer";
import Card from "../Card/Card";
import { data } from "../../data";
import ProductContainer from "../ProductContainer/ProductContainer";
import PartnerClientCard from "../PartnerClientCard/PartnerClientCard";
import PartnersClientsList from "../PartnersClientList/PartnersClientsList";
import CompanyLocations from "../CompanyLocations/CompanyLocations";

const Layout = () => {
  return (
    <>
      <Header />
      <ContentContainer top="-09" mobileTop="-09">
        <BannerText>
          <h1>SOLUÇÕES INOVADORAS PARA O SEU NEGÓCIO</h1>
          <p>
            Tudo o que você precisa para o seu negócio se diferenciar no
            mercado, a Núcleo tem para você!
          </p>
        </BannerText>
        <BannerImage>
          <img src={vrImg} alt="vr" />
        </BannerImage>
      </ContentContainer>
      <TitleContainer top="61" mobileTop="61" mediumTop="49">
        <HeaderContainer>
          <h3>A Núcleo</h3>
          <p>
            A Núcleo IT busca desenvolver softwares para potencializar a gestão
            da sua empresa. Contamos com sistemas completos de ERP e Business
            Intelligence que agilizam a tomada de decisão e geram resultados
            surpreendentes, além de aplicativos específicos sob medida. Tudo
            isso de forma prática, automatizada, especialista e simplificada,
            facilitando sua gestão da sua empresa.
          </p>
        </HeaderContainer>
      </TitleContainer>
      <ContentContainer top="70" zIndex="minus" mobileTop="71.5">
        <CardGrid>
          {data.card.map(({ icon, name, description }) => {
            return (
              <Card
                key={name}
                icon={icon}
                name={name}
                description={description}
              />
            );
          })}
        </CardGrid>
      </ContentContainer>
      <TitleContainer top="186" mobileTop="257" mediumTop="188">
        <HeaderContainer>
          <h3 id="products">Nosso Produtos</h3>
          <p>
            Alguns dos nossos principais produtos feitos para Planejamento e
            Gestão da sua Empresa
          </p>
        </HeaderContainer>
      </TitleContainer>
      <ContentContainer
        top="188"
        zIndex="minus"
        display="no"
        mobileTop="270"
        mediumTop="195"
      >
        <ProductContainer />
      </ContentContainer>
      <TitleContainer top="492" mobileTop="627" mediumTop="459">
        <HeaderContainer>
          <h3 id="about">Nosso Propósito</h3>
          <p>
            Empoderar empresas para estarem a frente de seus concorrentes em
            seus negócios
          </p>
          <span>
            Thinking Ahead - Realizando projetos de negócios para sua empresa!
          </span>
        </HeaderContainer>
      </TitleContainer>
      <ContentContainer
        top="503"
        zIndex="minus"
        display="no"
        mobileTop="641"
        mediumTop="470"
      >
        <CompanyMeta>
          <CompanyCard>
            <i className="fas fa-medal"></i>
            <h1>Missão e Princípios</h1>
            <p>
              Gerar valor para nossos clientes, acionistas, equipe e sociedade,
              atuando na área de tecnologia da informação de forma sustentável.
              Praticidade, Simplicidade, Integração, Comprometimento, Agilidade,
              Qualidade e Resultado.
            </p>
          </CompanyCard>
          <CompanyCard>
            <i className="fas fa-brain"></i>
            <h1>Visão</h1>
            <p>
              Ser referência até 2025 entre as cinco melhores empresas do estado
              do RS referenciadas pela inovação em tecnologias avançadas,
              reconhecida como a melhor opção por clientes, colaboradores,
              comunidade, fornecedores e investidores, pelos produtos e serviços
              na área de Tecnologia da Informação.
            </p>
          </CompanyCard>
        </CompanyMeta>
        <QuoteMessage>
          <i className="fas fa-quote-right"></i>
          <p>
            A vida é feita de escolhas, pense, reflita e aja! Tome a decisão,
            não fique em cima do muro! Todos temos dificuldades, assim, devemos
            nos focar e acreditar que no final tudo vai dar certo! Levo comigo
            que independentemente se estamos na vida profissional, familiar ou
            no mundo dos negócios, devemos fazer o bem, e sim, isso realmente
            vale a pena! Vamos colocar nossa cabeça no travesseiro e saber que
            fizemos a coisa correta.
          </p>
          <span>
            Pedro Bochese - <strong>CEO</strong>
          </span>
        </QuoteMessage>
      </ContentContainer>
      <ContentContainer top="573" display="no" mobileTop="766" mediumTop="560">
        <HeaderContainer>
          <h3>
            <i className="far fa-handshake"></i>
            Parceiros
          </h3>
        </HeaderContainer>
      </ContentContainer>
      <PartnersClientsList top="605" mobileTop="791" mediumTop="589">
        {data.partners.map(({ image }) => {
          return <PartnerClientCard key={image} image={image} />;
        })}
      </PartnersClientsList>
      <ContentContainer top="620" display="no" mobileTop="811" mediumTop="600">
        <HeaderContainer>
          <h3>
            <i className="fas fa-users"></i>
            Alguns Clientes
          </h3>
        </HeaderContainer>
      </ContentContainer>
      <PartnersClientsList top="655" mobileTop="838" mediumTop="635">
        {data.clients.map(({ image }) => {
          return <PartnerClientCard key={image} image={image} />;
        })}
      </PartnersClientsList>
      <TitleContainer top="741" mobileTop="920" mediumTop="700">
        <HeaderContainer>
          <h3>Suporte ao cliente</h3>
          <p style={{ marginBottom: "2.5rem" }}>
            Clique no botão para criar uma ordem de serviço!
          </p>
          <a
            href="/#"
            onClick={(ev) => {
              ev.preventDefault();
            }}
          >
            <i className="fas fa-plus"></i>
            Criar Solicitação
          </a>
        </HeaderContainer>
      </TitleContainer>
      <ContentContainer
        top="752"
        zIndex="minus"
        mobileTop="936"
        mediumTop="715"
      >
        <span id="contact" />
        <CompanyLocations />
      </ContentContainer>
      <FooterContainer>
        <h1>Todos os Direitos Reservados</h1>
        <span>Nucleo IT - 2020</span>
      </FooterContainer>
    </>
  );
};

export default Layout;
