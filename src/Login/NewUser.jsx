import React from "react";
import { withRouter } from "react-router-dom";
import { Container, Form, FormGroup, Label, Input, Button} from "reactstrap";

const NewUser = (props) => {
  return (
    <Container>
      <h2>新規登録</h2>
      <Form>
        <FormGroup>
          <Label for="userId">ID</Label>
          <Input type="text" name="userId" id="userId" placeholder="ID" />
        </FormGroup>
        <FormGroup>
          <Label for="password">パスワード</Label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
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
      </Form>
      <Button color="primary" onClick={
        () =>
        props.history.push({pathname: "main"})
      }
      >
        登録
      </Button>
    </Container>
  );
};

export default withRouter(NewUser);
