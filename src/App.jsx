import React from 'react';
import ContactForm from './components/ContactForm';
import ServiceCard from './components/ServiceCard';
import './App.css';

const App = () => {
  const services = [
    {
      icon: "/presentation.png",
      title: "Presentation Design",
      description: "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet"
    },
    {
      icon: "/media.png",
      title: "Audio - Visual Production",
      description: "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet"
    },
    {
      icon: "/translation.png",
      title: "Translation Services",
      description: "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet"
    },
    {
      icon: "/ContactForm.png",
      title: "Graphic Design",
      description: "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet"
    },
    {
      icon: "/media.png",
      title: "Research & Analytics",
      description: "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet"
    },
    {
      icon: "/presentation.png",
      title: "Data Processing",
      description: "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet"
    }
  ];

  return (
    <div className="app">
      <div className="container">
        <div className="content-wrapper">
          <div className="left-section">
            <div className="logo">
              <img src="/EZ Works Blue.png" alt="EZ Works Logo" />
            </div>
            <h1>Suite Of Business Support Services</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
            <ContactForm />
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
