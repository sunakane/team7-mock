import React from "react";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';


class ColumnCard extends React.Component {
  render() {
      return (
        <div>
        <div>
          <Card style={{margin:'auto',width:'90%'}} className="row no-gutters">
            <CardImg top width="50%" src="images/shirt.jpg" alt="Card image cap"/>
            <CardBody>
              <CardTitle><b><font size="4">今年の流行</font></b></CardTitle>
              <CardSubtitle className="mb-2 text-muted"> <font size="2">2020.09.01</font></CardSubtitle>
              <CardText>今回のテーマは冬用コート！</CardText>
              <CardText>{this.state.detail}</CardText>
              <Button onClick={this.handleClick}>詳細</Button>
            </CardBody>
          </Card>
        </div>
        <div>
          <Card style={{margin:'auto',width:'90%'}} className="row no-gutters">
            <CardImg top width="50%" src="images/clothes.jpeg" alt="Card image cap"/>
            <CardBody>
              <CardTitle><b><font size="4">今年の流行</font></b></CardTitle>
              <CardSubtitle className="mb-2 text-muted"> <font size="2">2020.09.01</font></CardSubtitle>
              <CardText>今回のテーマは冬用コート！</CardText>
              <CardText>{this.state.detail}</CardText>
              <Button onClick={this.handleClick}>詳細</Button>
            </CardBody>
          </Card>
        </div>
        </div>
      );
  }
  handleClick() {
    // ***** tenkiの値の書き換え *****
    this.setState({detail:"今年は黒のコート"});

  }
  constructor(props) {
      super(props);
      this.state = { detail : "‥‥" };
      this.handleClick = this.handleClick.bind(this);
    }
};

function Column() {
  // return   <div>test</div>;
  return (
    <ColumnCard />
  );
}


// export default Example;
export default Column;
