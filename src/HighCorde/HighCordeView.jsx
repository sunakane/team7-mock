import React, { Component } from 'react';


// 服購入画面から高い点数のコーデを表示
class HighCordeView extends Component {
  render() {
    return (
      <div>
        <div id="high-cord-title">この服を使った高いコーデ一覧</div>
          <div id="main-trend-items">
            <div id="main-trend-item">
              <img src="https://mensfashion.itembox.design/product/055/000000105560/000000105560-01-l.jpg" id="main-trend-image" alt="" />
              <div id="corde-score">95点</div>
              <div id="corde-name">たぬきさん</div>
            </div>
            <div id="main-trend-item">
              <img src="https://mensfashion.itembox.design/product/734/000000073488/000000073488-01-l.jpg" id="main-trend-image" alt="" />
              <div id="corde-score">90点</div>
              <div id="corde-name">猫さん</div>
            </div>
          </div>
      </div>
    );
  }
}

export default HighCordeView;
