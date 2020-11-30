import React, { Component } from 'react';


// AI判定後に高い点数のコーデを表示
class AiHighCorde extends Component {
  render() {
    return (
      <div>
        <div id="high-cord-title">カテゴリ別 高得点コーデ</div>
          <div id="main-trend-items">
            <div id="main-trend-item">
              <div id="ai-corde-name">おでかけ</div>
              <img src="https://mensfashion.itembox.design/product/055/000000105560/000000105560-01-l.jpg" id="main-trend-image" alt="" />
              <div id="corde-score">95点</div>
            </div>
            <div id="main-trend-item">
              <div id="ai-corde-name">カジュアル</div>
              <img src="https://mensfashion.itembox.design/product/734/000000073488/000000073488-01-l.jpg" id="main-trend-image" alt="" />
              <div id="corde-score">90点</div>
            </div>
            <div id="main-trend-item">
              <div id="ai-corde-name">フォーマル</div>
              <img src="https://mensfashion.itembox.design/product/734/000000073488/000000073488-01-l.jpg" id="main-trend-image" alt="" />
              <div id="corde-score">91点</div>
            </div>
            <div id="main-trend-item">
              <div id="ai-corde-name">季節</div>
              <img src="https://mensfashion.itembox.design/product/055/000000105560/000000105560-01-l.jpg" id="main-trend-image" alt="" />
              <div id="corde-score">9３点</div>
            </div>
          </div>
      </div>
    );
  }
}

export default AiHighCorde;
