import React, { Component } from "react";
import axios from 'axios';

// 服単体コンポーネント
class Cloth extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount(){
  }

  handleToBuy = () => {
    // 購入完了アニメーション
    const element =  document.querySelector('#buy_animation');
    element.innerHTML = "購入ありがとうございます&#x1f604";
    element.classList.add('animated', 'fadeInUp');
    element.addEventListener('animationend', function() {
      element.classList.remove('animated', 'fadeInUp');
      element.innerHTML = "";
    });

    // 「購入ボタン」を押せなくする
    const button = document.getElementById("buy-btn");
    button.disabled = true;
    button.innerHTML = "購入済み";

    axios.post('http://localhost:8000/api/v1/buy', {
      "clothID": this.props.id
    }, {withCredentials: true})
    .then((response) => {
        console.log(response.data);
    })
    .catch(() => {
        console.log("post fail");
    });
  }

  
  render() {
    return (
      <div id="cloth-box">
        <div id="cloth-detail-box">
          <div id="cloth-name">{this.props.name}</div>
          <div id="cloth-price">{this.props.price}円</div>
        </div>
        <img src={this.props.image} id="cloth-image" />
        <button onClick={this.handleToBuy} className="btn btn-primary" id="buy-btn">購入する</button>
      </div>
    )
  }
}

export default Cloth;