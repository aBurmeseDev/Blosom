import React, { Component } from 'react';
import './App.css';

import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Link as Linking } from 'react-router-dom';
import { Link, Element, Events } from 'react-scroll';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';
// Pages
import NavBar from './pages/Navbar';
import Home from './pages/Home';
import Order from './pages/Order';
import Menu from './pages/Menu';
import About from './pages/About';
import Footer from './pages/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  componentDidMount() {
    Events.scrollEvent.register('begin', function() {
      console.log('begin', arguments);
    });

    Events.scrollEvent.register('end', function() {
      console.log('end', arguments);
    });
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }
  render() {
    return (
      <div className='App'>
        <BrowserRouter>
          <Switch>
            <Route
              path='/'
              render={() => {
                return (
                  <div>
                    <div className='Navbar'>
                      <Navbar color='light' light expand='md'>
                        <NavbarBrand id='navbrand' href='/'>
                          Blosom
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggle.bind(this)} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                          <Nav className='ml-auto' navbar>
                            <NavItem>
                              <Link
                                activeClass='active'
                                className='nav'
                                to='home'
                                spy={true}
                                smooth={true}
                                duration={1000}
                              >
                                Home
                              </Link>
                            </NavItem>
                            <NavItem>
                              <Link
                                activeClass='active'
                                className='nav'
                                to='order'
                                spy={true}
                                smooth={true}
                                duration={1000}
                              >
                                Order
                              </Link>
                            </NavItem>
                            <NavItem>
                              <Link
                                activeClass='active'
                                className='nav'
                                to='gallery'
                                spy={true}
                                smooth={true}
                                duration={1000}
                              >
                                Menu
                              </Link>
                            </NavItem>
                            <NavItem>
                              <Link
                                activeClass='active'
                                className='nav'
                                to='about'
                                spy={true}
                                smooth={true}
                                duration={1000}
                              >
                                About
                              </Link>
                            </NavItem>
                            {/* <NavItem>
                              <Link
                                activeClass='active'
                                className='nav'
                                to='contact'
                                spy={true}
                                smooth={true}
                                duration={1000}
                              >
                                Contact
                              </Link>
                            </NavItem> */}
                          </Nav>
                        </Collapse>
                      </Navbar>
                    </div>
                    <Element name='home'>
                      <Home />
                    </Element>
                    <Element name='order'>
                      <Order />
                    </Element>
                    <div className='para2' />
                    <Element name='gallery'>
                      <Menu />
                    </Element>
                    <div className='para3' />
                    <Element name='about'>
                      <About />
                    </Element>
                  </div>
                );
              }}
            />
          </Switch>
        </BrowserRouter>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}
export default App;
