import React, { useState } from "react";
import "./Testimonials.css";
import allReviews from "./AllReviews";

function Testimonials() {
const[clickedBtn,setClickedBtn]= useState(0);
const[discription,setDiscription]=useState(allReviews[0])
  const arrayOfSize5 = Array(5).fill(null);

  function btnClickHandel(index){
    setClickedBtn(index)
    setDiscription(allReviews[index])
  }

  return (
    <section className="testi_section">
      <div className="testi_container">
        <h2 className="title">THINGS PEOPLE SAY</h2>

        <div className="t_detail">
          <div className="details_inner">
            <div className="btn_nav">
              {arrayOfSize5.map((_, index) => {
                return (
                  
                    <div className="btn_div" onClick={()=>btnClickHandel(index)}>
                      <button className="btn" style={{ background: clickedBtn === index ? 'white' : 'transparent'}} />
                    </div>
                 
                );
              })}
            </div>

            <div className="t_discription">
                <div className="review">
                    <p >{discription.p}</p>
                </div>
                <div className="detail_bottom">
                    <p style={{ fontWeight: "bold"}}>{discription.name}</p>
                    <p style={{ marginBottom: "10px"}}>{discription.post}</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
