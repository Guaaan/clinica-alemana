import React, { Fragment } from "react";

function List({ medicdata }) {
  return (
    <Fragment>
      <h1>lista de Medicamentos</h1>
      <ul>
        {medicdata.map((medicamento, index) => {
          return (
            <li key={index}>
              <p>{medicamento.term}</p>
              <p>Venta en Chile activa: {medicamento.status}</p>
              <a href={medicamento._links.self.href}>link</a>
            </li>
          );
        })}
      </ul>
    </Fragment>
  );
}

export default List;
