import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn, faSpotify } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

import '../style/Links.scss';


export class Links extends React.Component {
  render(){
    return (
      <ul className="social-list">
        <li><a href="https://github.com/schwdim"><FontAwesomeIcon icon={ faGithub } size="2x" color="#FE5F55"/></a></li>
        <li><a href="https://www.linkedin.com/in/schwdim/"><FontAwesomeIcon icon={ faLinkedinIn } size="2x" color="#FE5F55"/></a></li>
        <li><a href="mailto:dimitri.schw@gmail.com"><FontAwesomeIcon icon={ faEnvelope} size="2x" color="#FE5F55"/></a></li>
        <li><a href="https://open.spotify.com/artist/0XLOIx5VKJkVXZ6HvhBFJX"><FontAwesomeIcon icon={ faSpotify } size="2x" color="#FE5F55"/></a></li>
      </ul>
    );
  }
}
