import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Figure from 'react-bootstrap/Figure';
import { Container, Navbar, Nav } from 'react-bootstrap';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import PortfolioPage from './components/PortfolioPage';
import ContactPage from './components/ContactPage';

import logo from './images/logo.png'




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'YoYo Motion',
      headerLinks: [
        { title: 'דף הבית', path: '/' },
        { title: 'עבודות', path: '/portfolio' },
        { title: 'צור קשר', path: '/contact' }
      ],
      home: {
        title: 'אני גורם לדברים לזוז',
        subtitle: 'התכוננו לקחת את השיווק של העסק שלכם צעד קדימה',
        text: 'הלקוחות המרוצים'
      },
      portfolio: {
        title: 'העבודות שלי',
      },
      contact: {
        title: 'צרו קשר',
      }
    }
  }
  state = { myDate: "05-03-2020" };


  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>

          <Navbar className='border-bottom' bg="transparent" expand="lg">
            <Navbar.Brand href="/">
              <img
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='navbar-toggle' />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">דף הבית</Link>
                <Link className="nav-link" to="/portfolio">העבודות שלי</Link>
                <Link className="nav-link" to="/contact">צרו קשר</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subtitle={this.state.home.subtitle} text={this.state.home.text} />} />
          <Route path="/portfolio" render={() => <PortfolioPage title={this.state.portfolio.title} />} />
          <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} />} />

          <Footer />
        </Container>
      </Router>
    )
  }
}

export default App;