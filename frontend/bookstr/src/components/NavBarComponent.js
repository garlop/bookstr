import React, {Component} from 'react';
import {Navbar, NavbarBrand, Nav, Input, NavItem, Collapse, NavbarToggler} from 'reactstrap';
import {Link, NavLink} from 'react-router-dom';

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
              <NavLink to="/home" className="nav-link">Favorites</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/home" className="nav-link">My Books</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/home" className="nav-link">Global</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/home" className="nav-link">Local</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/home" className="nav-link">Following</NavLink>
            </NavItem>
          </Nav>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link to="/editor" className="btn btn-primary mr-2 mt-2">Write</Link>
            </NavItem>
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
