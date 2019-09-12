import React, { Component } from 'react';
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
  DropdownItem
} from 'reactstrap';

class NavBar extends Component {
  state = {
    isOpen: false
  };
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div className='Navbar'>
        <Navbar light expand='md'>
          <NavbarBrand id='navbrand' href='/'>
            Blosom Bento
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle.bind(this)} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className='ml-auto' navbar>
              <NavItem>
                <NavLink className='nav' href='#'>
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='nav' href='#'>
                  Menu
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='nav' href='#'>
                  Order
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='nav' href='#'>
                  About
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
export default NavBar;
