import React, { Fragment } from "react";
import MedicCard from "./MedicCard";
import { Row, Col } from "react-bootstrap";

function List({ medicdata }) {
  return (
    <Fragment>
      <h1>lista de Medicamentos</h1>
      <Row xs={1} md={5} className="g-4">
        {medicdata.map((medicamento, index) => {
          let medicIndex = medicamento.url.split('/')[medicamento.url.split('/').length - 2]
          return (
            //envía estps datos a la mediccard
            <Col>
              <MedicCard
                //to={`/medic-info/${medicIndex}`}
                nombre={medicamento.term}
                id={medicamento.id}
                proveedor={medicamento.supplier}
                extended={medicamento.extended}
                sabor={medicamento.flavour}
              />
            </Col>
          );
        })}
      </Row>
    </Fragment>
  );
}

export default List;
