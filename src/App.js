import { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Select from "react-select";
import Card from "./containers/Card";
import MedicListContainer from "./containers/MedicListContainer";

function App() {
  const [Medicamentos, setMedicamentos] = useState([]);
  const [tablaMedicamentos, setTablaMedicamentos] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [refSet, setRefSet] = useState([]);

  //declarar axios
  var axios = require("axios");
  //configurar axios
  var config = {
    method: "get",
    url: "https://gtw-prod.alemana.io/public/api-farmacos/v1/vmpp?q=amoxi&refset=1002",
    headers: {
      "X-API-Key": "5e1dc5891a05f000011faf522daf1a4785e04b3ab708d2da1fc7ea4c",
      "Content-Type": "application/json",
    },
  };
  const peticionGet = async () => {
  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
}
  /*const peticionGet = async () => {
    await axios(config)
      .then((response) => {
        setMedicamentos(response.data);
        setTablaMedicamentos(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };*/

  const handleChange = (e) => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  };

  const filtrar = (terminoBusqueda) => {
    var resultadosBusqueda = tablaMedicamentos.filter((elemento) => {
      if (
        elemento.name
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase()) ||
        elemento.company.name
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase())
      ) {
        return elemento;
      }
    });
    setMedicamentos(resultadosBusqueda);
  };

  useEffect(() => {
    peticionGet();
  }, []);

  return (
    <div className="App">
      <div className="containerInput">
        <input
          className="form-control inputBuscar"
          value={busqueda}
          placeholder="Nombre del medicamento (Mínimo 2 caracteres)"
          onChange={handleChange}
        />
        <select
          className="form-control inputBuscar"
          value={refSet}
          placeholder="Búsqueda por Nombre o Empresa"
          onChange={handleChange}
        >
          <option value="1002">Petitorio Mínimo Farmacéutico</option>
          <option value="1003">Ley Ricarte Soto</option>
          <option value="1004">Psicotrópicos</option>
          <option value="1005">Estupefacientes</option>
          <option value="1006">Antibióticos</option>
        </select>
        <button className="btn btn-success" type="submit">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
      <div></div>
      <div className="table-responsive">
        <MedicListContainer/>

        {/*<table className="table table-sm table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Status</th>
              <th>Nombre de Usuario</th>
              <th>Correo</th>
              <th>Sitio Web</th>
              <th>Ciudad</th>
              <th>Empresa</th>
            </tr>
          </thead>
           <tbody>
            {Medicamentos &&
              Medicamentos.map((medicina) => (
                <tr key={medicina.page}>
                  <td>{medicina._links}</td>
                  <td>{medicina._embedded}</td>
                  <td>{medicina.phone}</td>
                  <td>{medicina.username}</td>
                  <td>{medicina.email}</td>
                  <td>{medicina.website}</td>
                  <td>{medicina.address.city}</td>
                  <td>{medicina.company.name}</td>
                </tr>
              ))}
          </tbody> 
        </table>*/}
      </div>
    </div>
  );
}

export default App;
