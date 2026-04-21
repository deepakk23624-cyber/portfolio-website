import { useState } from "react";
import { MdArrowOutward, MdVolumeOff, MdVolumeUp } from "react-icons/md";

interface Props {
  image?: string;
  alt?: string;
  video?: string;
  link?: string;
}

const WorkImage = (props: Props) => {
  const [isVideoHovered, setIsVideoHovered] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsMuted(!isMuted);
  };

  const handleMouseEnter = () => {
    if (props.video) {
      setIsVideoHovered(true);
    }
  };

  const handleMouseLeave = () => {
    setIsVideoHovered(false);
    setIsMuted(true); // reset to muted and auto-play state gracefully on leave
  };

  return (
    <div className="work-image">
      <a
        className="work-image-in"
        href={props.link}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        target="_blank"
        data-cursor={"disable"}
      >
        {props.link && (
          <div className="work-link">
            <MdArrowOutward />
          </div>
        )}
        {props.image && (
          <img
            src={props.image}
            alt={props.alt}
            style={
              props.video
                ? { aspectRatio: "9/16", objectFit: "cover", borderRadius: "10px", maxHeight: "450px", width: "auto", margin: "0 auto", display: "block" }
                : props.image.includes("googledrive")
                  ? { borderRadius: "10px", width: "100%", maxHeight: "450px", objectFit: "contain" }
                  : { borderRadius: "10px", width: "100%" }
            }
          />
        )}

        {(isVideoHovered || !props.image) && props.video && (
          <>
            <video
              src={`/images/${props.video}`}
              autoPlay
              muted={isMuted}
              playsInline
              loop
              style={{
                position: props.image ? "absolute" : "relative",
                width: "100%",
                height: "100%",
                top: 0,
                left: 0,
                backgroundColor: "#000",
                objectFit: "cover",
                borderRadius: "10px",
                aspectRatio: "9/16",
                maxHeight: "450px"
              }}
            />
            <button
              onClick={toggleMute}
              style={{
                position: "absolute",
                bottom: "20px",
                right: "20px",
                zIndex: 10,
                background: "rgba(0, 0, 0, 0.6)",
                color: "#fff",
                border: "none",
                borderRadius: "50%",
                width: "45px",
                height: "45px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "0.2s"
              }}
              aria-label="Toggle mute"
            >
              {isMuted ? <MdVolumeOff size={24} /> : <MdVolumeUp size={24} />}
            </button>
          </>
        )}
      </a>
    </div>
  );
};

export default WorkImage;