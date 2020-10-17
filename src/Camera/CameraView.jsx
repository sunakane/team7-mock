import React, { Component } from "react";

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
        height: 515,
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
    const video  = document.querySelector("#camera");
    const btn = document.querySelector("#shutter");
    const canvas = document.querySelector("#picture");  
    const ctx = canvas.getContext("2d");
    const audio = new Audio("se/camera-se.mp3")

    canvas.style.display = "block";

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
    kekka.innerHTML = "あなたのコーディネートは.... <div id=\"score\">80点！</div>"
    btn.remove();

    // おすすめコーディネートの紹介
    const recoCord = document.getElementById("recommend-cord");
    // TODO
    recoCord.innerHTML = "おすすめコーディネートはこちら";
  }

  render() {
    return (
      <div>
        <h2>コーディネートAI判定</h2>

        <div id="btn-form">
          <button type="button" id="shutter" onClick={this.clickShutter}>判定！</button>
        </div>
        <div id="kekka"></div>
        <div id="recommend-cord"></div>
        <video id="camera" width="330" height="500"></video>
        <canvas id="picture" width="330" height="500"></canvas>
      </div>
    )
  }
}

export default CameraView;
