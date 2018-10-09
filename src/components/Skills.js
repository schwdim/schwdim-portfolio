import React from "react";

import skills from "../content/skills";

import '../style/Skills.scss';

export class Skills extends React.Component {
  getHalf(listSize){
    return Math.ceil(listSize/2);
  }

  render() {
    const otherHalf = skills;
    const firstHalf = otherHalf.splice(0,this.getHalf(otherHalf.length));



    return (<div className="skills">
      <h2>Skills:</h2>
      <div className="skillRow">
        {
          firstHalf.map(skill => (
            <Skill
              key={skill.name}
              name={skill.name}
              percentage={skill.percentage}
            />
          )
        )}
      </div>
      <div className="skillRow">
        {
          otherHalf.map(skill => (
            <Skill
              key={skill.name}
              name={skill.name}
              percentage={skill.percentage}
            />
          )
        )}
      </div>
      <div className="skillRow"></div>
    </div>);
  }
}

function Skill(props) {
  const {name, percentage} = props;

  return (<div className="progressBar">
    <h4>{name}</h4>
    <div className="progressBarContainer">
      <div className="progressBarValue" style={{
          width: percentage + "%"
        }}></div>
    </div>
  </div>);
}
