
import gsap from "gsap";
import { smoother } from "../Navbar";

export function initialFX() {
  document.body.style.overflowY = "auto";
  smoother.paused(false);
  document.getElementsByTagName("main")[0].classList.add("main-active");
  gsap.to("body", {
    backgroundColor: "#0b080c",
    duration: 0.5,
    delay: 1,
  });

  // Fallback to standard DOM element animation, circumventing gsap-trial SplitText restriction on Vercel
  gsap.fromTo(
    [".landing-info h3", ".landing-intro h2", ".landing-intro h1"],
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.inOut",
      y: 0,
      stagger: 0.1,
      delay: 0.3,
    }
  );

  gsap.fromTo(
    ".landing-h2-info",
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.inOut",
      y: 0,
      delay: 0.3,
    }
  );

  gsap.fromTo(
    ".landing-info-h2",
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      y: 0,
      delay: 0.8,
    }
  );

  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      delay: 0.1,
    }
  );

  LoopText(".landing-h2-info", ".landing-h2-info-1");
  LoopText(".landing-h2-1", ".landing-h2-2");
}

function LoopText(elem1: string, elem2: string) {
  var tl = gsap.timeline({ repeat: -1 });

  gsap.set(elem1, { y: 0, opacity: 1 });
  gsap.set(elem2, { y: 80, opacity: 0 });

  tl.to(elem1, {
    y: -80,
    opacity: 0,
    duration: 1.2,
    ease: "power3.inOut",
    delay: 3,
  })
    .fromTo(
      elem2,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.inOut",
        immediateRender: false
      }
    )
    .to(elem2, {
      y: -80,
      opacity: 0,
      duration: 1.2,
      ease: "power3.inOut",
      delay: 3,
    })
    .fromTo(
      elem1,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.inOut",
        immediateRender: false
      }
    );
}
