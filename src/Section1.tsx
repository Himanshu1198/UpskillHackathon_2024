import React from "react";
import bgimage from "@/assets/b2.jpg"; 
import { TypewriterEffectSmoothDemo } from "./Typewriter";

const Section1: React.FC = () => {
  const sectionStyle: React.CSSProperties = {
    position: "relative",
    width: "100vw",
    height: "100vh",
  };

  const imageStyle: React.CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: -1, // Ensure the image is behind other content
  };

  const textStyle: React.CSSProperties = {
    position: "absolute",
    top: "50%", // Center the text vertically
    left: "10%", // Adjust the distance from the left side
    transform: "translateY(-50%)", // Center the text vertically
    color: "white", // Text color
    zIndex: 1, // Ensure the text is above the image
  };

  return (
    <section style={sectionStyle}>
      <img src={bgimage} alt="Background" style={imageStyle} />
      <div style={textStyle}>
        <TypewriterEffectSmoothDemo />
      </div>
    </section>
  );
}

export default Section1;
