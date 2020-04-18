import React, { Component } from 'react';
import './App.css';
import { HashLink as Link } from 'react-router-hash-link';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Figure from 'react-bootstrap/Figure';
import { Container, Navbar, Nav } from 'react-bootstrap';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import PortfolioPage from './components/PortfolioPage';
import ContactPage from './components/ContactPage';
import logo from './images/logo.png'
import NavBar from './components/NavBar';




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
        section: null,
      },
      contact: {
        title: 'צרו קשר',
      }
    }
  }
  handleClick = (string)=>{
    this.setState({portfolio:{section:string}});
  }
  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <NavBar handleClick = {this.handleClick}/>
          <Switch>
          <Route path="/" exact render={() => <HomePage
            title={this.state.home.title}
            subtitle={this.state.home.subtitle}
            text={this.state.home.text}
            handleClick = {this.handleClick}
             />} />
          <Route path="/portfolio" exact render={() => <PortfolioPage title={this.state.portfolio.title} section={this.state.portfolio.section} handleClick={this.handleClick}/>} />
          <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} />} />
          </Switch>
          <Footer />
        </Container>
      </Router>
    )
  }
}

export default App;