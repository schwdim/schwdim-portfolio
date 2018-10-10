import React from 'react';
import projects from "../content/projects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faEye } from '@fortawesome/free-solid-svg-icons';

import '../style/Projects.scss';
import '../style/Skills.scss';

export class Projects extends React.Component {
  render() {
    return (<div id="projects" className="projects">
      <h2>Projects</h2>
      {
        projects.map(project => (
          <Project
            title={project.title}
            description={project.description}
            tags={project.tags} code_link={project.code_link}
            img={project.img} key={project.title}
            demo_link={project.demo_link}
          />
        ))}
    </div>);
  }
}

function Project(props) {

    const {title, description, img, code_link, demo_link, tags} = props;

    return (<div className="project">
      <div className="project-image">
        <img alt={ title + "Screenshot"} src={img}/>
      </div>
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <div className="project-description">
          {description}
        </div>
        <div className="project-tags">
          {
            tags.map((tag, index) => (
              <div key={index} className="project–tag">{tag}</div>
            ))}
        </div>
        <div className="project-buttons">
          <Button link={demo_link} type='demo'/>
          <Button link={code_link} type='code'/>
      </div>
      </div>
    </div>);
}

function Button(props){
  const {link, type} = props;

  if(link === undefined){
    return null;
  }

  let icon;
  let text;

  if(type === 'code'){
    icon = faCode;
    text = "View code";
  }else{
    icon = faEye;
    text = "Check it out";
  }

  return (
      <div className="project-button">
        <a target="_blank" rel="noopener noreferrer" href={link}><FontAwesomeIcon className='project-button-icon' icon={ icon } />{ text }</a>
      </div>
  );
}
