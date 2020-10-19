import React, { useState } from "react";
import {
  Container,
  Form,
  FormGroup,
  Input,
  Button,
  Label,
  Alert,
} from "reactstrap";
import { withRouter } from "react-router-dom";
import User from "../User.js";

const Login = (props) => {
  const [userId, setUserId] = useState("");
  const [password, setPassWord] = useState("");

  const [errMsg, setErrMsg] = useState("");

  async function onLoginClicked() {
    try {
      await User.login(userId, password);
      props.history.push({ pathname: "main" });
    } catch (e) {
      setErrMsg("IDとパスワードが一致しません");
    }
  }

  return (
    <Container>
      <Form>
        {errMsg && <Alert color="danger">{errMsg}</Alert>}
        <FormGroup row>
          <Label for="userId">ID</Label>
          <Input
            type="text"
            name="userId"
            id="userId"
            placeholder="ID"
            onChange={(e) => {
              setUserId(e.target.value);
            }}
            value={userId}
          />
        </FormGroup>
        <FormGroup row>
          <Label for="loginPassword">パスワード</Label>
          <Input
            type="password"
            name="password"
            id="loginPassword"
            placeholder="パスワード"
            onChange={(e) => {
              setPassWord(e.target.value);
            }}
            value={password}
          />
        </FormGroup>
        <Button color="primary" onClick={onLoginClicked}>
          ログイン
        </Button>
      </Form>
    </Container>
  );
};

export default withRouter(Login);
