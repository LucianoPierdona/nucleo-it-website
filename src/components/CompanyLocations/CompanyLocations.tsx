import React, { useState } from "react";
import { data } from "../../data";
import { CompanyCard, CompanyList, MapContainer } from "./styles";

const CompanyLocations = () => {
  const [showCX, setShowCX] = useState("none");
  const [showAP, setShowAP] = useState("none");
  const [showMessage, setShowMessage] = useState("block");

  const showMap = (mapId: string) => {
    if (mapId === "mapaAP" && showAP === "none") {
      if (showCX === "block") {
        setShowCX("none");
        setShowAP("block");
      }
      setShowMessage("none");
      setShowAP("block");
    }
    if (mapId === "mapaCX" && showCX === "none") {
      if (showAP === "block") {
        setShowAP("none");
        setShowCX("block");
      }
      setShowMessage("none");
      setShowCX("block");
    }
  };

  return (
    <>
      <CompanyList>
        <h1>Nucleo IT</h1>
        {data.companyLocal.map((company) => {
          return (
            <CompanyCard onClick={() => showMap(company.companyId)}>
              <h1>Unidade {company.city}</h1>
              <ul>
                <li>
                  <i className="far fa-envelope"></i>
                  {company.email}
                </li>
                <li>
                  <i className="fas fa-phone"></i>
                  {company.phone}
                </li>
                <li>
                  <i className="fas fa-map-marker-alt"></i>
                  {company.address}
                </li>
              </ul>
            </CompanyCard>
          );
        })}
      </CompanyList>
      <MapContainer style={{ height: "50vh" }}>
        <h1 style={{ display: `${showMessage}` }}>
          Escolha uma filial para saber sua localização
        </h1>
        <iframe
          width="900"
          height="450"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5220.474984844564!2d-51.20827280453383!3d-29.157333535482454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951ea2eeb46742a3%3A0x38e9a3976718d5c6!2sN%C3%BAcleo%20IT!5e0!3m2!1spt-BR!2sde!4v1600649970628!5m2!1spt-BR!2sde"
          title="cx"
          frameBorder="0"
          scrolling="no"
          marginHeight={0}
          marginWidth={0}
          id="mapaCX"
          style={{ display: `${showCX}` }}
        ></iframe>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3494.207411906492!2d-51.26724688423094!3d-28.862448184268192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951e81ce36a34b39%3A0xdb0981cc679ac109!2sFAP%20-%20Faculdade%20de%20Ant%C3%B4nio%20Prado!5e0!3m2!1spt-BR!2sde!4v1600647322281!5m2!1spt-BR!2sde"
          title="ap"
          width="900"
          height="450"
          frameBorder="0"
          scrolling="no"
          marginHeight={0}
          marginWidth={0}
          id="mapaAP"
          style={{ display: `${showAP}` }}
        ></iframe>
      </MapContainer>
    </>
  );
};

export default CompanyLocations;
