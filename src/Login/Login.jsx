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
  const [email, setEmail] = useState("");
  const [password, setPassWord] = useState("");

  const [errMsg, setErrMsg] = useState("");

  async function onLoginClicked() {
    try {
      await User.login(email, password);
      props.history.push({ pathname: "main" });
    } catch (e) {
      setErrMsg("メールアドレスかパスワードが違います");
    }
  }

  return (
    <Container>
      <Form>
        {errMsg && <Alert color="danger">{errMsg}</Alert>}
        <FormGroup row>
          <Label for="loginEmail">メールアドレス</Label>
          <Input
            type="email"
            name="email"
            id="loginEmail"
            placeholder="email@example.com"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
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
