import React, {Component} from 'react';
import {Navbar, NavbarBrand, Nav, Input, NavItem, NavLink, Collapse, NavbarToggler} from 'reactstrap';

class NavbarBookstr extends Component{

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render(){
    return (
        <Navbar dark color="dark" expand="md">
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarToggler onClick={this.toggle}/>
          <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Input/>
            </NavItem>
            <NavItem>
              <NavLink href="/">Favorites</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">My Books</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Global</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Local</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Following</NavLink>
            </NavItem>
          </Nav>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Nav vertical className="mr-2">
                <NavItem>
                  <a href="/">Luis Garnica</a>
                </NavItem>
                <NavItem>
                  <a href="/" className="profile-settings">Settings</a>
                </NavItem>
              </Nav>
            </NavItem>
            <NavItem>
              <img src={require('../img/imagen1.jpeg')} alt="User" className="imageuser" ></img>
            </NavItem>
          </Nav>
          </Collapse>
        </Navbar>
    );
  }
}

export default NavbarBookstr;
