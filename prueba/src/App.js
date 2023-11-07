import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <div className="Header">
        <h1>Seleccione moneda</h1>
        <p>Para la correcta medición es necesario el uso de una moneda en el centro de la palma de tu mano.</p>
      </div>
      <div className="row p-1">
        <div className="col-12">
          <p>Puedes usar una de estas monedas</p>
          <div className="p-1 border rounded"><img src="" alt="img monedas" /></div>
          <div className="p-1">
            <p>Coloca la moneda en el centro de la palma de tu mano</p>
            <div className="p-1 border rounded"><img src="" alt="img palma de la mano" /></div>
          </div>
        </div>
        <div className="col-12 mt-1">
          <p>¿Cómo te gusta llevar el anillo?</p>
          <div className="p-1 border">
            <div className="form-check">
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Ajustado
              </label>
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
            </div>
          </div>
          <button className="btn border border-danger">
            <div className="form-check" >
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Suelto
              </label>
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
            </div>
          </button>
        </div>
      </div>
      <div className="mt-5">
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center">
            <li className="page-item disabled">
              <a className="page-link">Volver</a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">Siguiente</a>
            </li>
          </ul>
        </nav>
        <div className="p-1">
          <p>Powered by</p>
          <img src="" alt="Logo Aitaca" />
        </div>
      </div>

    </div>
  );
}

export default App;
