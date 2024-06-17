// import DrawerAppBar from '../src/components/Navbar'

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
// import { BrowserRouter } from 'react-router-dom'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Clients from "./components/clients/Clients";
import Testimonials from "./components/Testimonials/Testimonials";
import Posts from "./components/Posts/Posts";
import Footer from "./components/Footer/Footer";
import Blogs from "./components/Blogs/Blogs";
import Contect from "./components/Contect/Contect";
import { useEffect, useRef, useState } from "react";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Contact" element={<div id="contact"><Contect /></div>} />
          <Route path="Blog" element={<div id="blog"><Blogs /></div>} />
         
         
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

function Home() {
  return (
    <>
      
      <div id="hero">
      <Hero />
      </div>

      <div id="about">
        <About />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="clients">
        <Clients />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>

      <Posts id1={0} id2={1} />
    </>
  );
}

// function Contact() {
//   return <Contect />;
// }

// function Blog() {
//   return <Blogs />;
// }
// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//         {/* <Routes>
//           <Route path="/" element={<Navbar />}>
//             <Route path="BLOG" element={<Blogs />} />
//             <Route path="Contact" element={<Contect />} />
//           </Route>
//         </Routes> */}
//         <Navbar />
//         <Hero />
//         <About />
//         <Experience />
//         <Projects />
//         <Clients />
//         <Testimonials />
//         <Posts />
//         <Footer />
//       </BrowserRouter>
//     </div>
//   );
// }

export default App;
