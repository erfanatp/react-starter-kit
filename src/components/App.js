import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Nav from './layouts/Nav';
import Footer from "./layouts/Footer";
import Home from './home/Home';
import About from './about/About';

class App extends Component {
  render() {
    return (
        <div>
            <Nav/>
            <div className="container">
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
            </div>
            <Footer/>
        </div>
    );
  }
}

export default App;
