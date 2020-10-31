import React, { Component } from "react";
import {
  Button
} from 'reactstrap';

// 未ログインユーザーが一番はじめにアクセスするページ
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount(){
  }
  
  render() {
    return (
      <div class="home-back">
        <div id="home-title">Cordinate App</div>
        <div id="home-content">CordinateAppはあなたに最適なコーディネートを提案します。</div>

        <div id="home-button">
          <Button color="primary" href="/login" style={{marginLeft:'90px',marginRight:'20px'}}>
                ログイン
          </Button>{' '}

          <Button color="primary" href="/new">
                新規登録
          </Button>{' '}
        </div>
      </div>
    )
  }
}

export default Home;
