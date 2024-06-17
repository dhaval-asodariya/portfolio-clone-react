import React from "react";
import Data from './ExData'

const Accordion = ({experienceStyle,expArr}) => {
  // console.log(Data[1].id)
  return (
    <div>
      <div class="accordion" id="accordionExample">
        
        {expArr.map((exp,index)=>{
          return( <div class="accordion-item">
          <h2 class="accordion-header" id={`heading${Data[index].id}`}>
            <button
            // style={experienceStyle.pButton}
              class={`accordion-button ${index===0?"":"collapsed"}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${Data[index].id}`}
              aria-expanded= {index===0?"true":"false"}
              aria-controls={`collapse${Data[index].id}`}
            >
              {exp}
            </button>
          </h2>
          <div
            id={`collapse${Data[index].id}`}
            class= {`accordion-collapse collapse ${index===0?"show":""}`}
            aria-labelledby={`heading${Data[index].id}`}
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <strong style={experienceStyle.exDate} >{Data[index].time}</strong> 
              <p style={experienceStyle.exDetail_p}>{Data[index].detail}</p>
              <ul style={experienceStyle.exDetail_ul}>
              {Data[index].list.map((tech) => {
                return(
                  <li style={experienceStyle.exDetail_li}>{tech}</li>
                )
              })
              }
               
              </ul>
            </div>
          </div>
        </div>

          )
        })}
       
        
      </div>
    </div>
  );
};

export default Accordion;
