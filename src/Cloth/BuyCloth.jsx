import React, { Component } from "react";
import axios from 'axios';

class BuyCloth extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount(){
    axios.get('http://localhost:8000/api/v1/get_cloth', {
    })
    .then((response) => {
        console.log(response.data);
    })
    .catch(() => {
        console.log("post fail");
    });
  }

  handleToSubmitCloth = () => {
  }

  
  render() {
    return (
      <div>
      </div>
    )
  }
}

export default BuyCloth;
