import React, { Component } from "react";
import { withRouter } from "react-router-dom";

// カメラでコーディネートを写真で撮って判定する
class CameraView extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount(){
    const video  = document.querySelector("#camera");
    const picture  = document.getElementById("picture");

    // 最初は picture の css(枠組み) を無効にしとく
    picture.style.display = "none";

    // カメラ設定
    const constraints = {
      audio: false,
      video: {
        width: 335,
        height: 480,
        facingMode: "user"   // フロントカメラを利用する
      }  
    }

    // カメラを <video> と同期
    navigator.mediaDevices.getUserMedia(constraints)
    .then((stream) => {
      video.srcObject = stream;
      video.onloadedmetadata = (e) => {
        video.play();
      };
    })
    .catch( (err) => {
      console.log(err.name + ": " + err.message);
    });
  }

  clickShutter = () => {
    const title = document.querySelector("#camera-title");
    const video  = document.querySelector("#camera");
    // const btn = document.querySelector("#shutter");
    const canvas = document.querySelector("#picture");
    const ctx = canvas.getContext("2d");
    const shareTitle = document.querySelector("#share-title");
    const shareImg = document.querySelector("#share-image");
    const audio = new Audio("se/camera-se.mp3")

    canvas.style.display = "block";
    title.style.display = "none";
    shareTitle.style.display = "inline-block";
    shareImg.style.display = "inline-block";

    // 演出的な目的で一度映像を止める
    video.pause();
    setTimeout( () => {
      video.play();
    }, 500);

    audio.play()

    // canvasに画像を貼り付ける
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height); 
    
    // カメラの停止
    const tracks = video.srcObject.getTracks();
    tracks.forEach(track => {
      track.stop();
    });    

    video.srcObject = null;
    video.remove();

    // 判定結果を表示
    const kekka = document.getElementById("kekka");
    kekka.innerHTML = 'あなたのコーディネートは.... <div id="score">&#092; 80点 &#047;</div>';
    //btn.remove();

    // おすすめコーディネートの紹介
    const recoCord = document.getElementById("recommend-cord");
    recoCord.innerHTML = 'おすすめコーディネートは<a href="/column">こちら</a>';
  }

  clickShare = () => {
    window.location.href = "http://twitter.com/share?text=コーディネートを判定したよ！";
  }

  render() {
    return (
      <div>
        <div id="camera-title">コーディネートAI判定</div>

        <div id="btn-form">
          <button type="button" id="shutter" onClick={this.clickShutter}>判定！</button>
        </div>
        <div id="kekka"></div>
        <div id="recommend-cord"></div>
        <video id="camera" width="330" height="460"></video>
        <canvas id="picture" width="330" height="460"></canvas>

        <div id="share-box">
          <div id="share-title">撮ったコーデをシェア！</div>
          <img src="images/twilogo.png" onClick={this.clickShare} alt="" id="share-image" />
        </div>
      </div> 
    )
  }
}

export default withRouter(CameraView);
