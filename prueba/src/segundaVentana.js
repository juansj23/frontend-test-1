import React, { useRef, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function SegundaVentana() {
    const navigate = useNavigate();
    const videoRef = useRef();
    const [imageData, setImageData] = useState(null);
    const location = useLocation();

    const coin = new URLSearchParams(location.search).get('coin');
    const fitting = new URLSearchParams(location.search).get('fitting');

    useEffect(() => {
        console.log('Moneda seleccionada:', coin);
        console.log('Ajuste seleccionado:', fitting);
    }, [coin, fitting]);

    const handleBackClick = () => {
        navigate('/');
    };

    const handleCapture = async () => {
        try {
            const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
            videoRef.current.srcObject = mediaStream;
        } catch (error) {
            console.error('Error al acceder a la cámara', error);
        }
    };

    const handleNextClick = async () => {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
  
      const imageDataUrl = canvas.toDataURL('image/jpeg');
      setImageData(imageDataUrl);
  
      const apiKey = 'x-api-key';
      const apiUrl = 'https://test.aitaca.io/Aitaca/1.0.0/calculator';
  
      try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': apiKey,
            },
            body: JSON.stringify({
                coin: coin,
                fitting: fitting,
                hand: imageDataUrl,
            }),
        });

        if (response.ok) {
            const result = await response.json();
            console.log('Resultado de la API:', result);
            // Usamos encodeURIComponent para asegurarnos de que los datos estén correctamente codificados en la URL
            const encodedImage = encodeURIComponent(imageDataUrl);
            navigate(`/tercera-ventana?coin=${coin}&fitting=${fitting}&image=${encodedImage}`);
        } else {
            console.error('Error al enviar la imagen a la API');
            // Continuar navegando a la tercera ventana incluso si hay un error en la API
            const encodedImage = encodeURIComponent(imageDataUrl);
            navigate(`/tercera-ventana?coin=${coin}&fitting=${fitting}&image=${encodedImage}`);
        }
    } catch (error) {
        console.error('Error de red:', error);
        // Continuar navegando a la tercera ventana incluso si hay un error de red
        const encodedImage = encodeURIComponent(imageDataUrl);
        navigate(`/tercera-ventana?coin=${coin}&fitting=${fitting}&image=${encodedImage}`);
    }
};
  

    return (
        <>
            <div className='col-12 text-center'>
                <h2 className='fw-semibold'>Captura de mano</h2>
                <p className='text-body-secondary'>Coloca tu mano frente a la cámara y captura la foto.</p>
            </div>
            <div className='row d-grid gap-1 col-10 mx-auto'>
                <video ref={videoRef} autoPlay playsInline muted className='col-12' />
                <button type='button' className='btn btn-primary col-6 mx-auto mt-3' onClick={handleCapture}>
                    Capturar Foto
                </button>
            </div>
            <div className='col-12 d-flex justify-content-center'>
                <button className='btn border m-2' onClick={handleBackClick}>
                    Volver
                </button>
                <button className='btn border m-2' onClick={handleNextClick}>
                    Siguiente
                </button>
            </div>
        </>
    );
}

export default SegundaVentana;

