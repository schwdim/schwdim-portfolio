import React from 'react';
import { Links } from './Links';

import '../style/Footer.scss';


export class Footer extends React.Component {
  render(){
    return(
      <div className="footer" >
        <div className="footer-links">
          <Links size="3x" />
        </div>
        <div className="footer-copyright" >
          Made by Dimitri Schweizer &copy; {new Date().getFullYear()}
        </div>
      </div>
    );
  }
}
