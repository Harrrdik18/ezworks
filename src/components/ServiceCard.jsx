import React from 'react';
import './ServiceCard.css';

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="service-card">
      <div className="card-header">
        <div className="icon">
          <img src={icon} alt={title} />
        </div>
        <h3>{title}</h3>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default ServiceCard; 