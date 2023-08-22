import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa el CSS de Bootstrap

const CardComponent = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card card-container">
        <img src="https://e7.pngegg.com/pngimages/193/660/png-clipart-computer-icons-woman-avatar-avatar-girl-black-hair-logo.png" className="card-img-top card-image" alt="Imagen de la tarjeta" />
        <div className="card-body">
          <h5 className="card-title">Giuliana Farias</h5>
          <p className="card-text">Como contenido que considero saber usar y que tengo aprendidos son: Javascript, express, etc...</p>
        </div>
      </div>
    </div>
    
  );
};

export default CardComponent;
