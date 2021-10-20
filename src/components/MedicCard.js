import axios from "axios";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card } from "react-bootstrap";
import { withStyles } from "@material-ui/core";

function MedicCard({ nombre }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text></Card.Text>
        <Button variant="primary">Link</Button>
      </Card.Body>
    </Card>
  );
}

export default MedicCard;
