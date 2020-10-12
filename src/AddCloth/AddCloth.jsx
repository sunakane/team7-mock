import React from "react";
import { Link } from "react-router-dom";
import { Form, FormGroup, Input, Button, Label } from "reactstrap";

class AddCloth extends AddCloth {
  constructor(props) {
    super(props);
    this.state = {
      image: "" // 画像を表示する用
    };
  }


  handleToSubmitCloth = () => {
    this.props.history.push('/InputPost');
  }

  handleChangeFile = (e) => {
    const files = e.target.files;
    const createObjectURL = (window.URL || window.webkitURL).createObjectURL || window.createObjectURL;
    const image_url = createObjectURL(files[0]);
    this.setState({image: image_url});    
  }
  
  render() {
    return (
      <div>
        <input type="file" ref="file" onChange={this.handleChangeFile} />
        <img src={this.state.image} />
        <button onClick={this.clickPostBtn} type="button">投稿する</button>
      </div>
    )
  }
}

export default AddCloth;
