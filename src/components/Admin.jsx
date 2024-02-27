import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

function Admin() {
    const [dados, setDados] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:4040/tutorial/getData');
                setDados(response.data);
            } catch (error) {
                console.error('Ocorreu um erro ao buscar os dados:', error);
            }
        };

        fetchData();
    }, []);

    const gerarPlanilhaCSV = useCallback(() => {
        if (dados) {
            const dataAsArray = Object.values(dados); // Convertendo o objeto em uma array de valores
            console.log(dataAsArray);
            const csvContent = 'Nome,Celular\n' + dataAsArray.map(item => `${item.nome || ''},${item.celular || ''}`).join('\n');
            const blob = new Blob([csvContent], { type: 'text/csv' });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'dados.csv';
            a.click();
            window.URL.revokeObjectURL(url);
        }
    }, [dados]);
    
    
    return (
        <div>
            <button onClick={gerarPlanilhaCSV}>Gerar Planilha</button>
        </div>
    );
}

export default Admin;