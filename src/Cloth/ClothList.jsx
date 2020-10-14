import React, { Component } from 'react';
import Cloth from './Cloth';

class ClothList extends Component {
  render() {
    const clothes = [];
    for(let i = 0; i < this.props.clothes.length; i++){
      if(this.props.clothes[i].ImageUrl === "no_url") {
        clothes.push(
          <Cloth
            key={i}
            index={i}
            id={this.props.clothes[i].ID}
            name={this.props.clothes[i].Name}
            price={this.props.clothes[i].Price}
            image="https://c.imgz.jp/612/33412612/33412612B_8_d_500.jpg"
          />
        );
      } else {
        clothes.push(
          <Cloth
            key={i}
            index={i}
            id={this.props.clothes[i].ID}
            name={this.props.clothes[i].Name}
            price={this.props.clothes[i].Price}
            image={this.props.clothes[i].ImageUrl}
          />
        ); 
      }
    }

    return (
      <ul>
        {clothes}
      </ul>
    );
  }
}

export default ClothList;
