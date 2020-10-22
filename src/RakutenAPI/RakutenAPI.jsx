import React, { Component } from "react";
import axios from 'axios';
import ClothList from '../Cloth/ClothList';

const rakutenAppID = process.env.REACT_APP_RAKUTEN_APP_ID;

class RakutenAPI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clothes: []
    };
  }

  componentDidMount(){
    // ID, Name, Price, ImageUrl
    let clothes = {};
    const clothesAry = [];
    const keyWord = "ナイキパーカー"

    axios.get(`https://app.rakuten.co.jp/services/api/IchibaItem/Search/20170706?format=json&keyword=${keyWord}&page=1&hits=10&applicationId=${rakutenAppID}`, {
    })
    .then((response) => {
        // elm.Item.itemName, elm.Item.itemPrice, elm.Item.mediumImageUrls[0].imageUrl
        response.data.Items.forEach((elm, index) => {
          clothes['ID'] = index;
          clothes['Name'] = elm.Item.itemName;
          clothes['Price'] = elm.Item.itemPrice;
          clothes['ImageUrl'] = elm.Item.mediumImageUrls[0].imageUrl;
          clothesAry.push(clothes);
          clothes = {}
        })
        this.setState({
          clothes: clothesAry
        });
        // console.log(this.state.clothes);
    })
    .catch(() => {
        console.log("post fail");
    });
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

export default RakutenAPI;
