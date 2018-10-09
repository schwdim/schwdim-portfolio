import React from 'react';
import {Project} from './Project';
import '../style/Projects.scss';

import Image1 from '../images/treeapp.png';
import Image2 from '../images/colbonc.png';
import Image3 from '../images/calendar.png'

const projects = [
  {
    title: 'Tree Species',
    description: 'Cross-platform mobile application for the mapping of tree species made for the city where I studied. Displays a list and a map of the different trees. The app gets its data from and API and store it localy so it can be used while being offline.',
    img: Image1,
    tags: [
      'Ionic', 'Angular', 'TypeScript', 'SASS', 'SQLite'
    ],
    code_link: 'https://github.com/schwdim/tree-species-app'
  }, {
    title: 'Colonie Boncourt',
    description: 'Website for a summer camp not far from where I come from. The client is now able to maintain it easily thanks to the WordPress Divi plugin.',
    img: Image2,
    tags: [
      'WordPress', 'PHP', 'Divi'
    ],
    demo_link: 'https://colonieboncourt.ch/'
  }, {
    title: '(Google) Availability Calendar',
    description: 'A simple HTML calendar that is synchronized with a Google Calendar. It uses the Google Calendar API to check the days where there is an event and display them differently. You can see it in use on the "Colonie Boncourt" website.',
    img: Image3,
    tags: [
      'jQuery', 'Moment.js', 'Google API'
    ],
    code_link: 'https://github.com/schwdim/html-google-availability-calendar',
    demo_link: 'https://colonieboncourt.ch/#sct-dispo'
  }
]

export class Projects extends React.Component {
  render() {
    return (<div id="projects" className="projects">
      <h2>Projects I worked on:</h2>
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
