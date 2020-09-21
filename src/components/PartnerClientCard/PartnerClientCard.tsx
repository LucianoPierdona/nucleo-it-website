import React from "react";
import { Card } from "./styles";

const PartnerClientCard: React.FC<{ image: string }> = ({ image }) => {
  return (
    <Card>
      <a href="/#">
        <img src={image} alt={image} />
      </a>
    </Card>
  );
};

export default PartnerClientCard;
