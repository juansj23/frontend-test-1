import React from 'react';
import { useLocation } from 'react-router-dom';

function TerceraVentana() {
    const location = useLocation();
    const coin = new URLSearchParams(location.search).get('coin');
    const fitting = new URLSearchParams(location.search).get('fitting');
    // Usamos decodeURIComponent para decodificar la imagen antes de mostrarla
    const imageData = decodeURIComponent(new URLSearchParams(location.search).get('image'));

    return (
        <>
            <div className='col-12 text-center'>
                <h2 className='fw-semibold'>Resultado</h2>
                <p className='text-body-secondary'>Aquí está la imagen capturada</p>
            </div>
            <div className='row d-grid gap-1 col-10 mx-auto'>
                <img src={imageData} alt='Captura de mano' className='col-12' />
            </div>
            <div className='col-12 text-center mt-3'>
                {/* <p>Moneda seleccionada: {coin}</p>
                <p>Ajuste seleccionado: {fitting}</p> */}
            </div>
        </>
    );
}

export default TerceraVentana;
