import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button
} from 'reactstrap';
import { withRouter } from "react-router-dom";
import User from "../User.js";

const Bar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  async function onLogoutClicked() {
    try {
      await User.logout();
      props.history.push({ pathname: "/" });
    } catch (e) {
      console.log(e);
    }
  }

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
                <DropdownItem href="/history_cloth">購入履歴</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <Button color="link" onClick={onLogoutClicked}>
            ログアウト
          </Button>{" "}
        </Collapse>
      </Navbar>
    </container-fluid>
  );
};

export default withRouter(Bar);
