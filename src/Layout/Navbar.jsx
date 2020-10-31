import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
  Button
} from 'reactstrap';

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Container>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/main">コーディネートAPP</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/camera">コーデ判定</NavLink>
              <NavLink href="/column">column</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                コーデ作成
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href="/add_cloth">服の追加</DropdownItem>
                <DropdownItem href="/buy_cloth">服の購入</DropdownItem>
                <DropdownItem href="/buy_cloth">購入履歴</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <Button color="link" href="/login">
            ログイン
          </Button>{" "}
          <Button outline color="primary" href="/new">
            新規登録
          </Button>
        </Collapse>
      </Navbar>
    </Container>
  );
};

export default Example;
