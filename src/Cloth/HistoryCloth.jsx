import React, { Component } from "react";
import ClothList from './ClothList';
import axios from 'axios';

// 服の購入履歴画面
class HistoryCloth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clothes: []
    };
  }

  componentDidMount(){
    // ユーザーが購入した服一覧を取得
    axios.get('http://localhost:8000/api/v1/history_cloth', {
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
        <div id="buy_animation"></div>
        <ClothList
          clothes={this.state.clothes}
          id={this.state.id}
        />
      </div>
    )
  }
}

export default HistoryCloth;
