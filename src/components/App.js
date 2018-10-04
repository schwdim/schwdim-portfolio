import React, { Component } from 'react';
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
