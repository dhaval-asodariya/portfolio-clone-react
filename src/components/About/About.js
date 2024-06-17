import React from "react";
import "./About.css";
import Spotify from "./Spotify";

function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        <h2 className="h2-title">ABOUT</h2>
        <p>My name is Chase Ohlson. I’m a frontend software engineer & freelance web developer in Los Angeles -- with roots in digital marketing & SEO. I'm passionate about music, technology and basically everything that makes the internet tick. </p>
        <p>My work currently consists of a full time engineering role at The Noun Project (working on <a href="https://www.lingoapp.com/"> Lingo </a>) & managing ongoing freelance clients and side projects. I find this balancing act to be super resourceful in terms my learning as a web developer, as well as for keeping up with the rapid expansion of developer tools, libraries, frameworks, etc. </p>
        <p>My freelance web development roots are in Wordpress & Shopify, of which I'm self taught.  In 2017, I started at UCLA to broaden my knowledge of the Node.js ecosystem.  Since then, I fell in love with & have been primarily using React & Redux in web applications.  For static sites, I love using Gatsby for creating blazing fast, SEO-driven headless frontend user interfaces. </p>
        <p>Whether you're a business owner looking to get started on a app or web development project with a freelance web developer, a developer looking to collaborate on something cool, or just wanting to say hi, shoot me a message and let's work together. </p>
        <Spotify></Spotify>
      </div>
      
    </section>

   
  );
}

export default About;
