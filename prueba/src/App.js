import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <div className="col-12 text-center ">
        <h2 className="fw-semibold">Selecciona moneda</h2>
        <div className="col-10 text-center mx-auto">
          <p className="text-body-secondary">Para la correcta medición es necesario el uso de una moneda en el centro de la palma de tu mano.</p>
        </div>
      </div>
      <div className="row d-grid gap-1 col-10 mx-auto">
        <div className="col-12 text-start">
          <p className="mb-0">Puedes usar una de estas monedas</p>
          <div className="p-1 border rounded"><img src="" alt="img monedas" /></div>
          <div className="mt-2">
            <p className="mb-0">Coloca la moneda en el centro de la palma de tu mano</p>
            <div className="p-1 border rounded"><img src="" alt="img palma de la mano" /></div>
          </div>
        </div>
        <div className="col-11 mt-3 text-start">
          <p className="mb-0">¿Cómo te gusta llevar el anillo?</p>
          <button type="button" className=" btn d-grid gap-1 col-12 mx-auto border">
            <div className="form-check d-flex justify-content-between  p-1">
              <label className="form-check-label fw-semibold" htmlFor="flexCheckDefault">
                Ajustado
              </label>
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
            </div>
          </button>
          <button type="button" className=" btn d-grid gap-2 col-12 mx-auto border mt-2">
            <div className="form-check d-flex justify-content-between p-1">
              <label className="form-check-label fw-semibold" for="flexCheckDefault2" >
                Suelto
              </label>
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault2" />
            </div>
          </button>
        </div>
      </div>
      <div className="mt-5">
        <div className="col-12 d-flex justify-content-center">
            <nav className="nav nav-pills">
              <button className="btn border m-2">
                <a className="nav-link" aria-current="page" href="#">
                  Volver
                </a>
              </button>
              <button className="btn border m-2">
                <a className="nav-link" href="#">
                  Siguiente
                </a></button>
            </nav>
        </div>
        <div className="p-1 border-top border-2 mt-4">
          <p>Powered by</p>
          <img src="" alt="Logo Aitaca" />
        </div>
      </div>

    </div>
  );
}

export default App;
