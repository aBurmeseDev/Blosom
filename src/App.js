import React, { Component } from 'react';
import './App.css';

import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Link, Element, Events } from 'react-scroll';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button
} from 'reactstrap';
// Pages
import Home from './pages/Home';
import Order from './pages/Order';
import Menu from './pages/Menu';
import About from './pages/About';
//import Gallery from './pages/Gallery';
import Footer from './pages/Footer';
import navLogo from './logos/navLogo.png';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  componentDidMount() {
    Events.scrollEvent.register('begin', function () {
      console.log('begin', arguments);
    });

    Events.scrollEvent.register('end', function () {
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
                      <Navbar
                        color='fade'
                        light
                        expand='md'
                        style={{ borderBottom: '0.5px solid #000', backgroundColor: "rgba(0,0,0,0.8)" }}
                      >
                        <NavbarBrand id='navbrand' href='/'>
                          <img src={navLogo} alt="Blosom" />
                        </NavbarBrand>
                        <NavbarToggler
                          style={{ borderColor: 'rgba(255, 255, 255, 0.893)' }}
                          onClick={this.toggle.bind(this)}
                        />
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
                                onClick={this.toggle.bind(this)}
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
                                onClick={this.toggle.bind(this)}
                              >
                                Order
                              </Link>
                            </NavItem>
                            <NavItem>
                              <Link
                                activeClass='active'
                                className='nav'
                                to='menu'
                                spy={true}
                                smooth={true}
                                duration={1000}
                                onClick={this.toggle.bind(this)}
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
                                onClick={this.toggle.bind(this)}
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
                    <Link to='order' spy={true} smooth={true} duration={1000}>
                      <Button color='light' className='orderD'>
                        Order Delivery
                      </Button>
                    </Link>
                    <Element name='home'>
                      <Home />
                    </Element>
                    <Element name='order'>
                      <Order />
                    </Element>
                    {/* <div className='para2' /> */}
                    <Element name='menu'>
                      <Menu />
                    </Element>
                    <div className='para3' />
                    {/* <Element name='gallery'><Gallery /></Element> */}
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
