import React, { Component } from "react";
import ClothList from './ClothList';
import axios from 'axios';

class BuyCloth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clothes: []
    };
  }

  componentDidMount(){
    axios.get('http://localhost:8000/api/v1/get_cloth', {
    })
    .then((response) => {
        console.log(response.data);
        this.setState({
          clothes: response.data["clothes"]
        })
        console.log(this.state.clothes);
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
        <ClothList
          clothes={this.state.clothes}
          id={this.state.id}
        />
      </div>
    )
  }
}

export default BuyCloth;
