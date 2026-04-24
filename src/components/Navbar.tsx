import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import "./styles/Navbar.css";

import { useLenis } from "lenis/react";

gsap.registerPlugin(ScrollTrigger);

export const smoother = {
  instance: null as any,
  paused: (val: boolean) => { 
    if (smoother.instance) {
      if (val) smoother.instance.stop();
      else smoother.instance.start();
    }
  },
  scrollTo: (target: string, smooth: boolean, position: string) => {
    if (smooth || position) {}
    if (smoother.instance) {
      smoother.instance.scrollTo(target);
    } else {
      document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
    }
  }
};

const Navbar = () => {
  const lenis = useLenis();

  useEffect(() => {
    smoother.instance = lenis;
  }, [lenis]);

  useEffect(() => {
    let links = document.querySelectorAll(".header ul a");
    links.forEach((elem) => {
      let element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        if (window.innerWidth > 1024) {
          e.preventDefault();
          let elem = e.currentTarget as HTMLAnchorElement;
          let section = elem.getAttribute("data-href");
          if (section) smoother.scrollTo(section, true, "top top");
        }
      });
    });
  }, []);
  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          <img src="/logo.png" alt="logo" style={{ width: "120px" }} />
        </a>


        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
