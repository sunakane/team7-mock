import React, { Component } from "react";
import axios from 'axios';
import FormData from 'form-data'
import { withRouter } from "react-router-dom";


// 服追加画面
class AddCloth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      price: "",
      type: "",
      image_base64: "",
      image: "" // 画像を表示する用
    };
  }

  componentDidMount(){
    const passsword = window.prompt("管理者パスワードを入力してください", "");
    if(passsword !== "password") {
      // TODO: ここはあとで修正
      this.props.history.push('/');
    }
  }

  handleToSubmitCloth = () => {
    //const params = new URLSearchParams();
    const formData = new FormData();
    formData.append('name', this.state.name);
    formData.append('price', this.state.price);
    formData.append('type', this.state.type);
    const b64 = this.ImageToBase64(document.getElementById('MyImg'), "image/jpeg");
    formData.append('image', b64);

    axios.post('http://localhost:8000/api/v1/cloth', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    })
    .then((response) => {
        console.log(response.data);
    })
    .catch(() => {
        console.log("post fail");
    });
  }

  onChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value,
    });
  }

  ImageToBase64(img, mime_type) {
    // New Canvas
    var canvas = document.createElement('canvas');
    canvas.width  = img.width;
    canvas.height = img.height;
    // Draw Image
    var ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);
    // To Base64
    return canvas.toDataURL(mime_type);
  }

  handleChangeFile = (e) => {
    this.setState({
      image_base64: e.target.files[0]
    })
    const files = e.target.files;
    const createObjectURL = (window.URL || window.webkitURL).createObjectURL || window.createObjectURL;
    const image_url = createObjectURL(files[0]);
    this.setState({image: image_url});
  }
  
  render() {
    return (
      <div>
        <div className="form-group">
          <label id="exampleInputEmail1">服の名前</label><br/>
          <input type="text" name="name" onChange={this.onChange} />
        </div>
        <div className="form-group">
          <label id="exampleInputEmail1">価格</label><br/>
          <input type="text" name="price" onChange={this.onChange} />
        </div>
        <div className="form-group">
          <label id="exampleInputEmail1">タイプ(a:トップ、b:パンツ)</label><br/>
          <input type="text" name="type" onChange={this.onChange} />
        </div>

        <input type="file" name="image" onChange={this.handleChangeFile} />
        <img src={this.state.image} alt="" id="MyImg" />
        <img src={this.state.image} alt="" id="show-img" />

        <button onClick={this.handleToSubmitCloth} className="btn btn-primary">投稿する</button>
      </div>
    )
  }
}

export default withRouter(AddCloth);
