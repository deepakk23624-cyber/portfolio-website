import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { useRef } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Work = () => {
  const videoSliderRef = useRef<HTMLDivElement>(null);
  const thumbnailSliderRef = useRef<HTMLDivElement>(null);

  const slide = (direction: "left" | "right") => {
    const scrollAmount = 600; // approximate box width
    const left = direction === "left" ? -scrollAmount : scrollAmount;

    videoSliderRef.current?.scrollBy({ left, behavior: "smooth" });
    thumbnailSliderRef.current?.scrollBy({ left, behavior: "smooth" });
  };

  const videoProjects = [
    { name: "Project 1", video: "video1.mp4", desc: "ORIGINAL WORK" },
    { name: "Project 2", video: "video2.mp4", desc: "CINEMATIC PACING" },
    { name: "Project 3", video: "video3.mp4", desc: "BEAT-DRIVEN CUT" },
    { name: "More Projects", video: "", image: "/images/googledrive.png", desc: "GOOGLE DRIVE FOLDER", link: "https://drive.google.com/drive/folders/1N3caRvJsf26kAzse2qvgj29eilYFlHj7" },
  ];

  const thumbnailProjects = [
    { name: "Project 1", image: "/images/thumbnail1.png", desc: "Photoshop" },
    { name: "Project 2", image: "/images/thumbnail2.png", desc: "Canva" },
    { name: "Project 3", image: "/images/thumbnail3.png", desc: "Figma" },
  ];

  return (
    <div className="work-section" id="work" style={{ height: "auto", minHeight: "100vh", paddingBottom: "100px" }}>
      <div className="work-container section-container" style={{ height: "auto" }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: "40px" }}>
          <h2>
            My <span>Work</span>
          </h2>
          <div className="slider-arrows">
            <button onClick={() => slide("left")} aria-label="Slide left">
              <MdChevronLeft size={40} />
            </button>
            <button onClick={() => slide("right")} aria-label="Slide right">
              <MdChevronRight size={40} />
            </button>
          </div>
        </div>

        {/* Video Projects Row */}
        <h3 style={{ fontSize: "40px", fontWeight: 500, marginBottom: "20px", marginTop: "0" }}>Video Edits</h3>
        <div className="work-flex" ref={videoSliderRef} style={{ height: "auto", marginBottom: "60px", paddingBottom: "20px" }}>
          {videoProjects.map((project, index) => (
            <div className="work-box" key={`vid-${index}`}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>
                  <div>
                    {project.link ? (
                      <a href={project.link} target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <h4>{project.name}</h4>
                      </a>
                    ) : (
                      <h4>{project.name}</h4>
                    )}
                  </div>
                </div>
                <h4>Featured Edit</h4>
                <p>{project.desc}</p>
              </div>
              <WorkImage image={project.image} video={project.video} link={project.link} alt="" />
            </div>
          ))}
        </div>

        {/* Thumbnail Projects Row */}
        <h3 style={{ fontSize: "40px", fontWeight: 500, marginBottom: "20px" }}>Thumbnails</h3>
        <div className="work-flex" ref={thumbnailSliderRef} style={{ height: "auto", paddingBottom: "20px" }}>
          {thumbnailProjects.map((project, index) => (
            <div className="work-box" key={`thumb-${index}`}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>
                  <div>
                    <h4>{project.name}</h4>
                  </div>
                </div>
                <h4>{project.desc}</h4>
              </div>
              <WorkImage image={project.image} alt="" />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Work;
