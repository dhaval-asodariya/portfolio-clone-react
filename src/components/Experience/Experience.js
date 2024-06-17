import React, { useState } from "react";
import Exdata from "./ExData";
import "./Experience.css";
import Accordion from "./Accordion";

function Experience() {
  const [idClicked, setIdClicked] = useState(0);
  const [data, setData] = useState(Exdata[0]);
  const expArr = [
    "The Noun Project",
    "Wondersauce",
    "Sensai",
    "South Mission",
    "Coalition Technologies",
  ];

  function exBtnClick(index) {
    console.log(`${index}`.type);
    setIdClicked(index);
    setData(Exdata[index]);
    // document.getElementById(`#${index}`).style.width='100%';
  }
  return (
    <section style={{ marginBottom: "100px" }} className="experience-section">
      <div style={experienceStyle.exContainer} className="experience-container">
        <h2 style={experienceStyle.exTitle} className="title">
          EXPERIENCE
        </h2>
        <div style={experienceStyle.exDiscription} className="exDiscription">
          <div
            style={experienceStyle.leftDisButtons}
            className="leftDisButtons"
          >
            <span style={experienceStyle.leftDisBefore}></span>

            {expArr.map((exp, index) => {
              return (
                <p
                  style={experienceStyle.pButton}
                  onClick={() => exBtnClick(index)}
                >
                  {exp}
                  <span
                    id={index}
                    style={{
                      ...experienceStyle.btnAfter,
                      width: idClicked === index ? "100%" : "0%",
                    }}
                  ></span>
                </p>
              );
            })}
            {/* <p style={experienceStyle.pButton}> The Noun Project</p>
            <p style={experienceStyle.pButton}> Wondersauce</p>
            <p style={experienceStyle.pButton}> Sensai</p>
            <p style={experienceStyle.pButton}> South Mission</p>
            <p style={experienceStyle.pButton}> Coalition Technologies</p> */}
          </div>
          <div
            style={experienceStyle.rightDiscription}
            className="rightDiscription"
          >
            <div style={experienceStyle.exDate} className="exDate">
              {data.time}
            </div>
            <div className="exDetail">
              <p style={experienceStyle.exDetail_p}>{data.detail}</p>
              <ul style={experienceStyle.exDetail_ul}>
                {data.list.map((item) => {
                  return <li style={experienceStyle.exDetail_li}>{item}</li>;
                })}
                {/* <li >Python (Django & Flask)</li> */}
                {/* <li>React (Redux & Hooks)</li>
                <li>CSS-in-JS (Emotion)</li>
                <li>Docker</li>
                <li>AWS</li> */}
              </ul>
            </div>
          </div>
        </div>

        <div className="show-accordion">
          <Accordion 
          expArr={expArr}
          experienceStyle={experienceStyle}/>
        </div>
      </div>
    </section>
  );
}

const experienceStyle = {
  exContainer: {
    width: "1200px",
    maxWidth: "100%",
    padding: "0 60px",
    // height: "500px",
    margin: "auto",
    textAlign: "left",
  },
  exTitle: {
    color: "#ef412d",
    fontSize: "40px",
    marginBottom: "20px",
    lineHeight: " 50px",
    fontFamily: "'Exo 2', sans-serif",
  },
  exDiscription: {
    display: "flex",
    justifyContent: "flex-start",
  },

  leftDisBefore: {
    transition: "all 0.2s ease 0s",
    content: '""',
    position: "absolute",
    bottom: "0px",
    left: "0px",
    width: "3px",
    height: "100%",
    background: "linear-gradient(rgb(239, 65, 45), rgb(79, 41, 32))",
    zIndex: 10,
  },
  leftDisButtons: {
    position: "relative",
    width: "215px",
    paddingLeft: "2px",
    flexShrink: 0,
  },
  pButton: {
    position: "relative",
    padding: "30px 0 30px 15px",
    // border: "1px solid black",
    textTransform: "uppercase",
    fontSize: "14.5px",
    color: "rgb(33, 37, 41)",
    fontWeight: "normal",
    cursor: "pointer",
  },
  btnAfter: {
    transition: "all 0.2s ease 0s",
    content: '""',
    position: "absolute",
    bottom: "0px",
    left: "0px",
    width: "0%",
    height: "2px",
    background: "linear-gradient(90deg, rgb(79, 41, 32), rgb(239, 65, 45))",
  },
  rightDiscription: {
    paddingLeft: "36px",
  },
  exDate: {
    fontSize: "14.5px",
    fontStyle: "italic",
    margin: "10.4px 0",
  },
  exDetail_p: {
    fontSize: "14px",
    fontFamily: ' "Roboto Mono", monospace',
    marginBottom: "10.4px",
    lineHeight: "29px",
  },
  exDetail_ul: {
    margin: "10.4px 0",
    fontSize: "14px",
    paddingLeft: "40px",
  },
  exDetail_li: {
    position: "relative",
    fontSize: "14px",
    lineHeight: "29px",
    marginBottom: "10px",
    fontFamily: ' "Roboto Mono", monospace',
  },
};
export default Experience;
