import React from "react";
import "./Clients.css";

function Clients() {
  const arrayOfSize20 = Array(20).fill(0);
  return (
    <section className="clientSection">
      <div className="clientContainer">
        <h2 className="title">I'VE WORKED WITH</h2>
        <div className="client_logos">
          {arrayOfSize20.map((_, index) => {
            return (
              <div className="cLogo">
                <img src={require(`../../assets/cLogos/cl${index+1}.avif`)}></img>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Clients;
