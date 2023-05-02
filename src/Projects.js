import React from "react";
// import { faker } from "@faker-js/faker";

const Projects = (props) => {
  return (
    <div className="ui link cards">
      <div class="card">
        <div class="image">
         <img src={props.image} alt="project 1" />
        </div>
        <div class="content">
          <div class="header">{props.title}</div>
          <div class="description">
            {props.content}
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Projects;
