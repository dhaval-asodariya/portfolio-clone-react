import React from "react";
import "./Footer.css";

function Footer() {
  
  return (
    <div className="footerSection">
      <div className="footer_container">
        <div className="left_data">
          <h4>NEED A LOS ANGELES WEB DEVELOPER? LET'S BUILD SOMETHING.</h4>
          <a href="/Contact">
            <button>GET IN TOUCH</button>
          </a>
        </div>
        <div className="right_social">
          <ul>
            <li className="beforeEffect">
              <a href="https://github.com/brohlson">Github</a>
            </li>
            <li className="beforeEffect">
              <a  href="https://twitter.com/chase_ohlson">Twitter</a>
            </li>
            <li className="beforeEffect">
              <a  href="https://www.linkedin.com/in/chase-ohlson-21013349/">LINKEDIN</a>
            </li>
            <li className="beforeEffect">
              <a href="https://chaseohlson.org/">CHARITY</a>
            </li>
            <li className="beforeEffect">
              <a href="https://github.com/brohlson/chaseohlson">SOURCE</a>
            </li>
          </ul>
        </div>
        <div className="copyright">
          <span>
            © Copyright 2024 −{" "}
            <a className="beforeEffect" href="https://chaseohlson.com/">
              Chase Ohlson
            </a>
          </span>
        </div>
      </div>
      {/* <span className="after"></span> */}
    </div>
  );
}

export default Footer;
