import React, { Component } from "react";

// 購入した服単体
class HistoryCloth extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  
  render() {
    return (
      <div id="buy-cloth-box">
        <div id="cloth-detail-box">
          <div id="cloth-name">{this.props.name}</div>
          <div id="cloth-price">{this.props.price}円</div>
        </div>
        <img src={this.props.image} alt="" id="cloth-image" />
      </div>
    )
  }
}

export default HistoryCloth;
