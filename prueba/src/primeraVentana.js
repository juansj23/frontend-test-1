import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import monedas from '/workspaces/frontend-test-1/prueba/src/monedas.png';
// import mano from '/workspaces/frontend-test-1/prueba/src/mano.png';
// import logoimg from '/workspaces/frontend-test-1/prueba/src/logoaitaca.png';


function PrimeraVentana() {
    const navigate = useNavigate();
    const [coin, setCoin] = useState(null);
    const [fitting, setFitting] = useState('');

    const handleCoinChange = (event) => {
        const selectedCoin = parseInt(event.target.value, 10);
        setCoin(selectedCoin);
    };

    const handleFittingChange = (value) => {
        setFitting(value);
    };

    const handleNextClick = () => {
        if (coin !== null && fitting) {
            navigate(`/segunda-ventana?coin=${coin}&fitting=${fitting}`);
        } else {
            alert('Si ingresaste todo correctante da click ha aceptar');
        }
    };

    const handleCloseApp = () => {
        window.close();
    };

    return (
        <>
            <div className='col-12 text-center '>
                <h2 className='fw-semibold'>Selecciona moneda</h2>
                <div className='col-10 text-center mx-auto'>
                    <p className='text-body-secondary'>Para la correcta medición es necesario el uso de una moneda en el centro de la palma de tu mano.</p>
                </div>
            </div>
            <div className='row d-grid gap-1 col-10 mx-auto'>
                <div className='col-12 text-start'>
                    <p className='mb-0'>Puedes usar una de estas monedas</p>
                    <div className='p-1 border rounded' style={{ height: '75px', overflow: 'hidden' }}><img src="https://i.ibb.co/8b0CW3Z/monedas-1.png" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt='img monedas' /></div>
                    <div className='mt-2'>
                        <p className='mb-0'>Coloca la moneda en el centro de la palma de tu mano</p>
                        <div className='p-1 border rounded' style={{ height: '100px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><img src="https://i.ibb.co/xgT2VR7/mano.png" style={{ width: '150px', height: '150px' }} alt='img palma de la mano' /></div>
                    </div>
                </div>
                <div className='col-11 mt-3 text-start'>
                    <p className='mb-0'>¿Cómo te gusta llevar el anillo?</p>
                    <button type='button' className=' btn d-grid gap-1 col-12 mx-auto' style={{ border: '3px solid #EC6276' }} onClick={() => handleFittingChange('fitted')}>
                        <div className='form-check d-flex justify-content-between  p-1' >
                            <label className='form-check-label fw-semibold' htmlFor='flexCheckDefault'>
                                Ajustado
                            </label>
                            <input className='form-check-input ' style={{ backgroundColor: '#EC6276' }} type='checkbox' value='' id='flexCheckDefault' />
                        </div>
                    </button>
                    <button type='button' className=' btn d-grid gap-2 col-12 mx-auto border mt-2' onClick={() => handleFittingChange('loose')}>
                        <div className='form-check d-flex justify-content-between p-1'>
                            <label className='form-check-label fw-semibold' htmlFor='flexCheckDefault2' >
                                Suelto
                            </label>
                            <input className='form-check-input' type='checkbox' value='' id='flexCheckDefault2' />
                        </div>
                    </button>
                </div>
            </div>
            <div className='mt-5'>
                <div className='col-12 d-flex justify-content-center'>
                    <nav className='nav nav-pills w-100'>
                        <div className='p-2 flex-fill'>
                            <button className='btn border m-1 w-100 ' onClick={handleCloseApp}>
                                <a className='nav-link fw-semibold fs-6' aria-current='page' href='#' style={{ color: '#475467' }}>
                                    Volver
                                </a>
                            </button>
                        </div>
                        <div className='p-2 flex-fill'>
                            <button className='btn border m-1 w-100 ' style={{ backgroundColor: '#EC6276' }} onClick={handleNextClick}>
                                <a className='nav-link fw-semibold fs-6' href='/segunda-ventana' style={{ color: 'white' }}>
                                    Siguiente
                                </a>
                            </button>
                        </div>
                    </nav>
                </div>
                <div className='p-1 border-top border-2 mt-0 d-flex align-items-center justify-content-center'>
                    <p style={{ fontSize: '12px', marginBottom: '0', marginRight: '0' }}>Powered by</p>
                    <div className='d-flex align-items-center' style={{ height: '90px', width: '92px' }}>
                        <img src="https://i.ibb.co/DKMqqNH/logoaitaca.png" alt='Logo Aitaca' style={{ width: '100%', height: '100%' }} />
                    </div>
                </div>
            </div>
        </>
    );
}
export default PrimeraVentana;