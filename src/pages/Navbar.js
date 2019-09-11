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
      <>
        <Navbar>
          <NavbarBrand href='/'>Blosom Bento</NavbarBrand>
          <NavbarToggler onClick={this.toggle.bind(this)} />
          <Collapse>
            <Nav className='ml-auto' navbar>
              <NavItem>
                <NavLink href='#'>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='#'>Menu</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='#'>Order</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='#'>About</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </>
    );
  }
}
export default Navbar;
