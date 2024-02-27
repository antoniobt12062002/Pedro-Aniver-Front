import React, { useState } from 'react';
import './ConfirmacaoForm.css';
import backgroundVideo from './Pedrokkkk.mp4';
import Infos from './Infos.jsx';

const ConfirmacaoForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [nome, setNome] = useState('');
  const [celular, setCelular] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:4040/tutorial/createData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nome, celular })
      });

      if (response.ok) {
        setIsModalOpen(true); // Abre o modal quando a presença é confirmada
      } else {
        console.error('Falha ao enviar os dados');
      }
    } catch (error) {
      console.error('Erro ao enviar os dados:', error);
    }
  };

  return (
    <div className="video-background">
      <video autoPlay loop>
        <source src={backgroundVideo} type="video/mp4" />
        Seu navegador não suporta vídeos em HTML5.
      </video>
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <h1>Confirme sua presença</h1>
          <div className="input-box">
            <input
              type="text"
              placeholder="Nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>
          <div className="input-box">
            <input
              type="number"
              placeholder="Celular"
              value={celular}
              onChange={(e) => setCelular(e.target.value)}
              required
            />
          </div>
          <button type="submit">Confirmar minha presença</button>
        </form>
      </div>
      <Infos isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default ConfirmacaoForm;
