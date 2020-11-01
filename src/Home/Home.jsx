import React, { Component } from "react";
import User from "../User.js";
import {
  Button
} from 'reactstrap';
import { Redirect } from "react-router-dom";

// 未ログインユーザーが一番はじめにアクセスするページ
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  renderRedirect = () => {
    var redirect_url = "http://localhost:3000/main";
    if (document.referrer) {
      var referrer = "referrer=" + encodeURIComponent(document.referrer);
      // redirect_url = redirect_url + ("/main" ? '&' : '?') + referrer;
    }
    window.location.href = redirect_url;
  };

  componentDidMount(){
    // TODO: cookieがあるとき /main に飛ばす. サーバーに確認しにいく必要あり
    if(User.get("isLoggedIn")){
      this.renderRedirect();
    }
  }
  
  render() {
    return (
      <div className="home-back">
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
