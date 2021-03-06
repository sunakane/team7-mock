import React, { Component } from "react";
import HistoryClothList from './HistoryClothList';
import axios from 'axios';
import { withRouter } from "react-router-dom";

// 服の購入履歴画面 (HistoryClothView → HistoryClothList → HistoryCloth)
class HistoryCloth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clothes: []
    };
  }

  componentDidMount(){
    // ユーザーが購入した服一覧を取得
    axios.get('http://localhost:8000/api/v1/my_cloth', {withCredentials: true})
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
        <h2>購入履歴</h2>
        <HistoryClothList
          clothes={this.state.clothes}
          id={this.state.id}
        />
      </div>
    )
  }
}

export default withRouter(HistoryCloth);
