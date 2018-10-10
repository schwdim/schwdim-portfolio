import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn, faSpotify } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

import '../style/Links.scss';


export class Links extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    const size = this.props.size;

    return (
      <ul className="social-list">
        <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/schwdim"><FontAwesomeIcon icon={ faGithub } size={ size } color="#FE5F55"/></a></li>
        <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/schwdim/"><FontAwesomeIcon icon={ faLinkedinIn } size={ size } color="#FE5F55"/></a></li>
        <li><a target="_blank" rel="noopener noreferrer" href="mailto:dimitri.schw@gmail.com"><FontAwesomeIcon icon={ faEnvelope} size={ size } color="#FE5F55"/></a></li>
        <li><a target="_blank" rel="noopener noreferrer" href="https://open.spotify.com/artist/0XLOIx5VKJkVXZ6HvhBFJX"><FontAwesomeIcon icon={ faSpotify } size={ size } color="#FE5F55"/></a></li>
      </ul>
    );
  }
}
