import React, { useState, useRef, useEffect } from 'react';
import './ConfirmacaoForm.css';
import backgroundVideo from './Pedrokkkk.mp4';
import Infos from './Infos.jsx';
import axios from 'axios';

const ConfirmacaoForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [nome, setNome] = useState('');
  const [celular, setCelular] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios.post('http://15.228.43.35:4040/tutorial/createData', { nome, celular }).then(res => {
        setIsModalOpen(true); // Abre o modal quando a presença é confirmada
        console.log(res)
    });

    console.log({ nome, celular });
  };

  const vidRef=useRef();
  useEffect(() => { vidRef.current.play(); },[])

  return (
    <div className="video-background">
      <video autoPlay loop muted ref={ vidRef }>
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
