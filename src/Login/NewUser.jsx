import React from "react";
import { withRouter } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button} from "reactstrap";

const NewUser = (props) => {
  async function clickTopPage() {
    props.history.push({ pathname: "/" });
  }

  return (
    <div className="home-back">
      <div id="new-title">新規登録</div>
      <Form id="new-form">
        <FormGroup>
          <Label for="submit_id">ID</Label>
          <Input type="text" name="submit_id" id="submit_id" placeholder="kono1997" autoComplete="off" />
        </FormGroup>
        <FormGroup>
          <Label for="name">ニックネーム</Label>
          <Input type="text" name="name" id="name" placeholder="こんす" autoComplete="off" />
        </FormGroup>
        <FormGroup>
          <Label for="year">年齢</Label>
          <Input type="text" name="year" id="year" placeholder="23" autoComplete="off" />
        </FormGroup>
        <FormGroup>
          <Label for="password">パスワード</Label>
          <Input
            type="password"
            name="password"
            id="password"
          />
        </FormGroup>
        <FormGroup>
          <Label for="sex">性別</Label>
          <Input type="select" name="sex" id="sex" defaultValue="default">
            <option value="default">ひとつ選択してください</option>
            <option value="0">男</option>
            <option value="1">女</option>
          </Input>
        </FormGroup>

        <div id="new-button">
          <Button color="primary" onClick={() => props.history.push({pathname: "main"})}>
            新規登録
          </Button>
        </div>

        <div id="top-back" onClick={clickTopPage}>トップページへ</div>
      </Form>
    </div>
  );
};

export default withRouter(NewUser);
