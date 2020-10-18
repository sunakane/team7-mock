import React from "react";
import { Link } from "react-router-dom";
import { Container, Form, FormGroup, Input, Button, Label } from "reactstrap";

const Login = () => {
  return (
    <Container>
      <Form>
        <FormGroup row>
          <Label for="loginEmail">メールアドレス</Label>
          <Input
            type="email"
            name="email"
            id="loginEmail"
            placeholder="email@example.com"
          />
        </FormGroup>
        <FormGroup row>
          <Label for="loginPassword">パスワード</Label>
          <Input
            type="password"
            name="password"
            id="loginPassword"
            placeholder="パスワード"
          />
        </FormGroup>
        <Button color="primary" tag={Link} to="/main">
          ログイン
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
