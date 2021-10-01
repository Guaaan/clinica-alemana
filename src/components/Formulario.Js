import React from "react";
import { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';





function Formulario() {

    state = {

    }

    //busqueda = statate, 
    const [busqueda, guardarBusqueda] = useState({

    })

    return (
        <div>
            <form>
                <div className="containerInput col s12">
                    <input
                        className="form-control inputBuscar"
                        value={busqueda}
                        placeholder="Búsqueda por Nombre"
                        onChange={handleChange}
                    />
                    <label htmlFor="Nombre">Nombre del medicamento</label>
                </div>

                <div className="containerInput col s12">
                    <select onChange={handleChange} name="refset">
                        <option value="1002">Petitorio Mínimo Farmacéutico</option>
                        <option value="1003">Ley Ricarte Soto</option>
                        <option value="1004">Psicotrópicos</option>
                        <option value="1005">Estupefacientes</option>
                        <option value="1006">Antibióticos</option>
                    </select>
                </div>

                <div className="containerInput col s12">
                    <button className="btn btn-success" >
                        <FontAwesomeIcon type="submit" icon={faSearch} />
                    </button>
                </div>
            </form>
        </div>
    )
}
export default Formulario;