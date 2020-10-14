import React, { Component } from "react";

class Cloth extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount(){
  }

  handleToSubmitCloth = () => {
  }

  
  render() {
    return (
      <div id="cloth-box">
        <div id="cloth-name">{this.props.name}</div>
        <div id="cloth-price">{this.props.price}</div>
        <img src={this.props.image} id="cloth-image" />

      </div>
    )
  }
}

export default Cloth;
