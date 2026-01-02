import React from 'react';
import Border from '../Border/Border';
import './Card.css';

const Card = ({ image, name, details, downloadLink }) => {
  return (
    <Border>
      <div className="card">
        <div className="card-inner">
          <div className="card-front">
            <img src={image} alt={name} />
          </div>
          <div className="card-back">
            <h2>{name}</h2>
            <p>{details}</p>
            <button onClick={() => window.open(downloadLink, '_blank')}>Download</button>
          </div>
        </div>
      </div>
    </Border>
  );
};

export default Card;

