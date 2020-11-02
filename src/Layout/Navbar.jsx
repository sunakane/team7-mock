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
    <container-fluid>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/main">Cordinate App</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                コーディネート
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href="/cordinate">コーディネート作成</DropdownItem>
                <DropdownItem href="/camera">コーデ判定</DropdownItem>
                <DropdownItem href="/column">コラム</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                ショッピング
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href="/buy_cloth">服の購入</DropdownItem>
                <DropdownItem href="/buy_cloth">購入履歴</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <Button color="link" href="/logout">
            ログアウト
          </Button>{" "}
        </Collapse>
      </Navbar>
    </container-fluid>
  );
};

export default Example;
