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
          <div id="main-trend-title-top">トレンドコーデ</div>
          <div id="main-trend-items">
            <div id="main-trend-item">
              <img src="https://mensfashion.itembox.design/product/632/000000163224/000000163224-01-xl.jpg" id="main-trend-image" alt="" />
              <div id="main-trend-content">今年の秋冬はxxxがオススメ！</div>
            </div>
            <div id="main-trend-item">
              <img src="https://mensfashion.itembox.design/product/024/000000002490/000000002490-01-l.jpg" id="main-trend-image" alt="" />
              <div id="main-trend-content">oooと△△△を組み合わせたコーデが今人気！</div>
            </div>
          </div>
          <div id="more"><a href="/">more !</a></div>
        </div>

        <div className="main-shop">
          <div id="main-shop-title-top">新着アイテム</div>
          <div id="main-shop-items">
            <div id="main-shop-item">
              <div id="main-shop-title">スイカTシャツ</div>
              <img src="images/suika-t.png" id="main-shop-image" alt="" />
              <div id="main-shop-price">￥3,000</div>
            </div>
            <div id="main-shop-item">
              <div id="main-shop-title">パーカー</div>
              <img src="images/parker.png" id="main-shop-image" alt="" />
              <div id="main-shop-price">￥5,000</div>
            </div>
          </div>
          <div id="more"><a href="/">more !</a></div>
        </div>
      </div>
    )
  }
}

export default Main;
