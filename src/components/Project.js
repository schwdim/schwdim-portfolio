import React from "react";

import '../style/Project.scss';

export class Project extends React.Component {
  render() {
    const {title, description, img, link, tags} = this.props;
    {console.log(img)}

    return (<div className="project">
      <div className="project-image">
        <img src={img}/>
      </div>
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <div className="project-description">
          {description}
        </div>
        <ul className="project-tags">
          {
            tags.map(tag => (
              <li className="project–tag">{tag}</li>
            ))}
        </ul>
        <div className="project-button"><a href={link}>View Code</a></div>
      </div>
    </div>);
  }
}
