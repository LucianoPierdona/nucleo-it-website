import React from 'react';
import { CardContainer } from './styles';

interface CardProps {
    icon: string,
    name: string,
    description: string,
}

const Card: React.FC<CardProps> = ({icon, name, description}) => {
    return (
        <CardContainer>
            <i className="material-icons">{icon}</i>
            <h3>{name}</h3>
            <p>{description}</p>
        </CardContainer>
    );
}

export default Card;