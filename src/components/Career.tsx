import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4> Professional Video Editor & Graphic Designer </h4>
                <h5>Freelance / Social Media</h5>
              </div>
            </div>
            <p>
              Delivered high-quality edits with cinematic visuals and smooth transitions. Specialized in creating viral content for social media platforms. Applied advanced motion graphics and effects for premium output. Consistently worked on improving engagement and content performance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
