import React, { useEffect, useRef, useState } from "react";
// import logo from ".../assets/images/logo.png";
import logo from "../../assets/images/logo.png";
import DehazeIcon from "@mui/icons-material/Dehaze";
import ClearIcon from "@mui/icons-material/Clear";

import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import "./Navbar.css";
import NavElements from "./NavElements";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [disableScrollEffect, setDisableScrollEffect] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(windowWidth);
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    // let dummycount = count;
    // setCount(() => dummycount++);
    // Add event listener for window resize
    window.addEventListener("resize", handleResize);
    return () => {
      console.log("remove event");
      // console.log(count);
      window.removeEventListener("resize", handleResize);
    };
  });
  function menuHandeler() {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.querySelector(".responced-nav").style.width = "0";
      document.querySelector(".responced-nav").style.display = "none";
      if (!disableScrollEffect) {
      document.querySelector(".scroll-color-change").style.width = "0%";
      }
    }
     else {
      setIsMenuOpen(true);
      document.querySelector(".responced-nav").style.display = "block";
      document.querySelector(".responced-nav").style.width = "100%";
      document.querySelector(".scroll-color-change").style.width = "100%";
    }
  }

  const navigate = useNavigate();
  // const[currentPath,setcurrentPath ]=useState('/');

  // setcurrentPath(window.location.pathname);

  useEffect(() => {
    const currentPath = window.location.pathname;
    // console.log(currentPath);
    if (currentPath === "/Blog" || currentPath === "/Contact") {
      setDisableScrollEffect(true);
      document.querySelector(".scroll-color-change").style.width = "100%";
      document.querySelector(".nav-section").style.boxShadow =
        "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px";
    } else {
      setDisableScrollEffect(false);
      if (!isMenuOpen) {
        document.querySelector(".scroll-color-change").style.width = "0%";
      }

      document.querySelector(".nav-section").style.boxShadow = "none";
    }
  });

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 100, // Adjust the offset if necessary
        behavior: "smooth",
      });
    }
  };
  const handleLinkClick = (path, sectionId) => {
    if (isMenuOpen) {
      // setIsMenuOpen(false);
      menuHandeler();
    }

    navigate(path); // Navigate to the specified path using React Router
    // Use setTimeout to ensure navigation happens before scrolling
    setTimeout(() => {
      scrollToSection(sectionId); // Scroll to the specified section
    }, 100);
  };

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    // console.log(disableScrollEffect);
    if (!disableScrollEffect) {
      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      ) {
        document.querySelector(".scroll-color-change").style.width = "100%";
        document.querySelector(".nav-section").style.boxShadow =
          "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px";
      } else {
        document.querySelector(".scroll-color-change").style.width = "0%";
        document.querySelector(".nav-section").style.boxShadow = "none";
      }
    } else {
      document.querySelector(".scroll-color-change").style.width = "100%";
    }
    if (isMenuOpen) {
      document.querySelector(".responced-nav").style.width = "0";
      document.querySelector(".responced-nav").style.display = "none";
    }
    setIsMenuOpen(false);
  }

  return (
    <section className="nav-section">
      <div className="scroll-color-change"></div>
      <nav className="navbar">
        <div className="container">
          <div className="logo" onClick={() => handleLinkClick("/", "hero")}>
            <img src={logo} />
          </div>
          <div className="nav-elements">
            <ul>
              <li>
                <Link
                  // to="about"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-100}
                  // href="#about"
                  onClick={() => handleLinkClick("/", "about")}
                >
                  ABOUT
                </Link>
              </li>
              <li>
                <Link
                  // to="experience"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-100}
                  onClick={() => handleLinkClick("/", "experience")}
                  // href="#experience"
                >
                  EXPERIENCE
                </Link>
              </li>
              <li>
                <Link
                  // to="projects"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-100}
                  // href="#projects"
                  onClick={() => handleLinkClick("/", "projects")}
                >
                  WORK
                </Link>
              </li>
              <li>
                <Link
                  // to="clients"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-100}
                  // href="#clients"
                  onClick={() => handleLinkClick("/", "clients")}
                >
                  CLIENTS
                </Link>
              </li>
              <li>
                <Link
                  // to="testimonials"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-100}
                  onClick={() => handleLinkClick("/", "testimonials")}
                  // href="#testimonials"
                >
                  TESTIMONIALS
                </Link>
              </li>
              <li>
                <NavLink
                  to="/Contact"
                  onClick={() => handleLinkClick("/Contact", "contact")}
                >
                  CONTACT
                </NavLink>
              </li>
              <li>
                <div className="v-line"></div>
              </li>
              <li>
                <NavLink
                  to="/Blog"
                  onClick={() => handleLinkClick("/blog", "blog")}
                >
                  BLOG
                </NavLink>
              </li>
            </ul>
          </div>
          {/* <NavElements/> */}
          <div className="menu-icon" onClick={menuHandeler}>
            {isMenuOpen ? <ClearIcon /> : <DehazeIcon />}
          </div>

          <div className="responced-nav">
            <ul>
              <li>
                {" "}
                <Link
                  // to="about"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-100}
                  // href="#about"
                  onClick={() => handleLinkClick("/", "about")}
                >
                  ABOUT
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  // to="experience"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-100}
                  onClick={() => handleLinkClick("/", "experience")}
                  // href="#experience"
                >
                  EXPERIENCE
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  // to="projects"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-100}
                  // href="#projects"
                  onClick={() => handleLinkClick("/", "projects")}
                >
                  WORK
                </Link>
              </li>
              <li>
                <Link
                  // to="clients"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-100}
                  // href="#clients"
                  onClick={() => handleLinkClick("/", "clients")}
                >
                  CLIENTS
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  // to="testimonials"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-100}
                  onClick={() => handleLinkClick("/", "testimonials")}
                  // href="#testimonials"
                >
                  TESTIMONIALS
                </Link>
              </li>

              <li>
                {" "}
                <NavLink
                  to="/Contact"
                  onClick={() => handleLinkClick("/Contact", "contact")}
                >
                  CONTACT
                </NavLink>
              </li>
              <li style={{ position: "relative" }}>
                <span className="hr-line"></span>
              </li>
              <li>
                <NavLink
                  to="/Blog"
                  onClick={() => handleLinkClick("/blog", "blog")}
                >
                  BLOG
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </section>
  );
};

export default Navbar;
