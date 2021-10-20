import React, { Component } from "react";
import axios from "axios";
import List from "../components/List";

class MedicListContainer extends Component {
  state = {
    medicData: []
  }

  componentDidMount() {
    //consulta get axios con headers
      axios.get(
          "https://gtw-prod.alemana.io/public/api-farmacos/v1/vmpp?q=amoxi&refset=1002",
          {
            headers: {"X-API-Key": "5e1dc5891a05f000011faf522daf1a4785e04b3ab708d2da1fc7ea4c"},})
        .then(res => {
          const medicData = res.data._embedded.vmpp;
          //const medicLink = res.data._embedded.vmpp._links.self.href;
          this.setState({
            medicData
          });
        })
        .catch((error) => {
          console.log(error);
        });
    
  }
  render() {
    const { medicData } = this.state;
    return (
      
        <List medicdata={ medicData } />
      
    );
  }
}

export default MedicListContainer;
