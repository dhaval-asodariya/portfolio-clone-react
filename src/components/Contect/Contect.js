import React from "react";
import './contect.css'
import Recaptcha from "../recaptcha/Recaptcha"
import { useNavigate } from "react-router-dom";

function Contect() {

  return (
    <div className="contectSection">
      <div className="contectContainer">
        <h2>Let's build a thing</h2>
        <form className="connect-form">
          <div className="inputGroup">
            <div className="sInputBox inputField">
                <input placeholder="First Name.."/>
            </div>
            <div className="sInputBox inputField">
                <input placeholder="Last Name.."/>
            </div>
          </div>
          <div className="inputGroup">
            <div className="sInputBox inputField">
                <input placeholder="Email.."/>
            </div>
            <div className="sInputBox inputField">
                <input placeholder="Phone No.."/>
            </div>

          </div>
          <div className="inputField">
            <input placeholder="Subject.."/>
          </div>
          <div className="inputField">
            <textarea className="text-msg" placeholder="Message.."/>
          </div>
          {/* <div className="conformation">
            <div className="tic-box">
                <iframe></iframe>
            </div>
          </div> */}
          {/* <Recaptcha/> */}
          <button className="submit-btn" type="submit">Send It</button>

        </form>
      </div>
    </div>
  );
}

export default Contect;
