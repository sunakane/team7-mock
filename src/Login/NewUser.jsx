import React from "react";
import { Container, Form, FormGroup, Label, Input } from "reactstrap";

const NewUser = () => {
  return (
    <Container>
      <Form>
        <FormGroup>
          <Label for="userId">ID</Label>
          <Input type="text" name="userId" id="userId" placeholder="ID" />
        </FormGroup>
      </Form>
    </Container>
  );
};

export default NewUser;
