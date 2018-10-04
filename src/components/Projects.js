import React from 'react';
import {Project} from './Project';
import '../style/Projects.scss';

import Image1 from '../images/square.png';

const projects = [
  {
    title: 'Tree Species',
    description: 'Cross-platform mobile application for the mapping of tree species I made for the city where I studied. It display a list and a map of the different species of trees. The app gets its data from and API and store it localy so it can be used while being offline.',
    img: Image1,
    tags: [
      'Ionic', 'Angular', 'TypeScript', 'SASS', 'SQLite'
    ],
    link: 'https://github.com/schwdim/tree-species-app'
  }, {
    title: 'Projet 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Cras situllamcorp la urna est, tempor eget sapien et, eleifend fermentum tortor. Donec suscipit lacus in blandit malesuada. Sed euismod odio id felis pellentesque, ut pharetra nunc iaculis.',
    img: "https://i.ytimg.com/vi/QAgy9r331v0/hqdefault.jpg",
    tags: [
      'Tag 1', 'Tag 42'
    ],
    link: 'https://github.com'
  }, {
    title: 'Projet 5',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Cras situllamcorp la urna est, tempor eget sapien et, eleifend fermentum tortor. Donec suscipit lacus in blandit malesuada. Sed euismod odio id felis pellentesque, ut pharetra nunc iaculis.',
    img: "http://www.zarias.com/wp-content/uploads/2016/02/36010216-funny-cat-pictures.jpg",
    tags: [
      'Tag 2', 'Tag 8'
    ],
    link: 'https://github.com'
  }
]

export class Projects extends React.Component {
  render() {
    return (<div className="projects">
      <h2>Projects I worked on:</h2>
      {
        projects.map(project => (
          <Project
            title={project.title}
            description={project.description}
            tags={project.tags} link={project.link}
            img={project.img} key={project.title}
          />
        ))}
    </div>);
  }
}
