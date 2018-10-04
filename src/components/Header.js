import React from 'react';
import { Links } from './Links';

import '../style/Header.scss';


export class Header extends React.Component {

  render(){
    return (
      <div className="header-container">
        <h1 className="my-name">Dimitri <span className="last-name">Schweizer</span></h1>
        <Links />
        <div className="my-description">
          <p>Hello, I am a web and mobile developer. I love making apps and websites using modern technologies.</p>
          <p>Besides I like music, design and photography.</p>
        </div>
      </div>
    );
  }
}
