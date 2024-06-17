import React from "react";
import p1 from '../../assets/images/P1.avif';
import "./Project.css"


function ProjectCard(props) {
    const project=props.project;
    const img = `P${project.id}`;
    // console.log("img>>",img)
  return (
    <div style={{...card.cardSection,background:project.bColor}}>
      <div style={card.pc_container} className="pc_container">
        <div style={card.leftDetail} className="leftDetail">
          <h3 style={card.title}>{project.pTitle}</h3>
          <div>
            <p>
              {project.pDisc}{" "}
              <a href={project.designLink} style={{ textDecoration: "underline",color: "white" }}>Design</a>.
            </p>
          </div>
          <div>
            <p style={card.title_ul}>DEVELOPMENT TOOLS</p>
            <ul style={{ paddingLeft: "40px", margin: "10px 0" }}>
             {project.toolList.map((li)=>{
                return <li>{li}</li>
             })}
            </ul>
          </div>
          <div style={{ marginTop: "25px" }}>
            <a href= {project.pLink} >
              <button style={card.button}>VIEW PROJECT</button>
            </a>
          </div>
        </div>
        <div style={card.rightImg} className="rightImg">
          <img style={card.img} src={require(`../../assets/images/${img}.avif`)} ></img>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;

const card = {
  cardSection: {
    // background: "rgb(0, 33, 52)",
    // background:`${project.bColor}`,
    // height: "760px",
    padding:'100px 0px'
  },
  pc_container: {
    width: "100%",
    height: "100%",
    maxWidth: "1400px",
    margin: "auto",
    padding: "0 60px",
    textAlign: "left",
    // padding:'0 60px',
    display: "flex",
    alignItems: "center",
    justifyContent:'space-between'
  },
  leftDetail: {
    width: "37%",
    color: "white",
  },
  title: {
    fontWeight: 800,
    fontSize: "52px",
    lineHeight: "62px",
    letterSpacing: "3.1px",
    marginBottom: "15.6px",
  },
  rightImg: {
    width: "60%",
    minHeight:'450px',
    marginBottom: "-72px",
    position: "relative",
  },

  img: { 
    width: "95%",
    position:'absolute',
    top:0,
    left:0,
},
  title_ul: {
    margin: "15px 0",
    fontWeight: "bold",
  },
  button: {
    color: "white",
    background: "transparent",
    border: "0.9px solid white",
    height: "62px",
    width: "210px",
    maxWidth: "100%",
    fontSize: "14px",
    fontFamily: "'Roboto Mono', monospace",
  },
  // lists:{
  //     margin:'15px 0',
  //     paddingLeft:'40px',
  // },

};
