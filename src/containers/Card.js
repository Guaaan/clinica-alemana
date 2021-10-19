import axios from 'axios';
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card } from "react-bootstrap";

class card extends Component {
  state ={
  medicData: []
}

  componentDidMount() {
    axios.get('https://gtw-prod.alemana.io/public/api-farmacos/v1/vmpp?q=amoxi&refset=1002')
    .then(res => {
      const medicData = res.data.results;

      this.setState({
        medicData: medicData
      })
    })
  }


  render() {

    const { medicData } = this.setState.state;

    return (
      <>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text></Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default card;
