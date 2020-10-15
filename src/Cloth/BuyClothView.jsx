import React, { Component } from "react";
import ClothList from './ClothList';
import axios from 'axios';

// 服購入画面 (BuyClothView → ClothList → Cloth)
class BuyClothView extends Component {
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
  
  render() {
    return (
      <div>
        <h2>ショッピング</h2>
        <div id="buy_animation"></div>
        <ClothList
          clothes={this.state.clothes}
          id={this.state.id}
        />
      </div>
    )
  }
}

export default BuyClothView;
