import React, { Component } from 'react';
import logo from '../images/logo.svg';
import '../style/App.scss';
import {Header} from './Header';
import { Projects } from './Projects'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Projects />
      </div>
    );
  }
}

export default App;
