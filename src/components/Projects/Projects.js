import React from "react";
import ProjectCard from "./ProjectCard";
import allProject from './ProjectData';
import "./Project.css"

function Projects() {
    
  return (
    <div>
      <section  style={projectstyle.projectSection} className="projectSection">
        <div style={projectstyle.Container} className="projectContainer">
          <h2 style={projectstyle.title} className="title">
          RECENT PROJECTS
          </h2>
    
        </div>
        {/* <ProjectCard/> */}
        {allProject.map((project)=>{
            return <ProjectCard  project={project} />
        })}
      </section>
    </div>
  );
}

export default Projects;

const projectstyle ={
    projectSection:{
       
        marginBottom: "100px"
    },
    Container:{
        width: "100%",
        maxWidth: "1400px",
        margin: "auto",
        padding: "0 60px",
        // height: "500px",
        textAlign: "left",
    },
    title:{
        color: "#ef412d",
        fontSize: "40px",
        marginBottom: "20px",
        lineHeight: " 50px",
        fontFamily: "'Exo 2', sans-serif",
    },
}