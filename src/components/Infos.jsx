// Infos.jsx
import React from 'react';
import './Infos.css';
import mapaImage from './mapa.png'; // Importe o arquivo de imagem do mapa

const Infos = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleMapClick = () => {
    window.open('https://www.google.com/maps/dir//chacara+roda+da+vida/@-24.1324932,-52.3714856,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x94eda1b891b063b9:0xb809e4c7f5cae22d!2m2!1d-52.3302861!2d-24.1325771?entry=ttu', '_blank');
  };

  return (
    <div className="info-modal-overlay" onClick={onClose}>
      <div className="info-modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Detalhes do Evento</h2>
        <p>Data: 09/03/2024</p>
        <p>Horário: Início 14:00hrs</p>
        <p>Levar oque for beber!</p>
        <div className="map-container" onClick={handleMapClick}>
          <img
            src={mapaImage} // Utilize a variável que contém o caminho para a imagem do mapa
            alt="Mapa do local"
            className="map-image"
          />
        </div>
        <button className="buttonmoldal" onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
}

export default Infos;
