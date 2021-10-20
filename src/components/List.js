import React, { Fragment } from "react";
import MedicCard from "./MedicCard";
import { Row, Col } from "react-bootstrap";

function List({ medicdata }) {
  return (
    <Fragment>
      <h1>lista de Medicamentos</h1>
      <Row xs={1} md={5} className="g-4">
        {medicdata.map((medicamento, index) => {
          console.log(medicamento._links.self.href)
          return (
            <Col>
              <MedicCard nombre={medicamento.term} />
            </Col>
          );
        })}
      </Row>
    </Fragment>
  );
}

export default List;
