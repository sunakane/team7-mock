import React, { Component } from "react";

// ログインユーザーが一番はじめにアクセスするページ
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount(){
  }
  
  render() {
    return (
      <div className="main">

        <div className="main-trend">
          <div className="main-trend-title">トレンド</div>
          <div id="main-trend-items">
            <div id="main-trend-item">
              <div id="main-trend-title">トレンド1</div>
              <div id="main-trend-image"></div>
              <div id="main-trend-content"></div>
            </div>
            <div id="main-trend-item">
              <div id="main-trend-title">トレンド2</div>
              <div id="main-trend-image"></div>
              <div id="main-trend-content"></div>
            </div>
          </div>
        </div>

        <div className="main-shop">
          <div className="main-shop-title">新着アイテム</div>
          <div id="main-shop-items">
            <div id="main-shop-item">
              <div id="main-shop-title">ショップ1</div>
              <div id="main-shop-image"></div>
              <div id="main-shop-content"></div>
            </div>
            <div id="main-shop-item">
              <div id="main-shop-title">ショップ2</div>
              <div id="main-shop-image"></div>
              <div id="main-shop-content"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Main;
