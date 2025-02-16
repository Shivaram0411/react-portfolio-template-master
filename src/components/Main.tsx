import React, { useRef, useEffect, useState } from "react";
import Globe, { GlobeMethods } from "react-globe.gl";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import * as THREE from "three"; // Ensure WebGL stability
import "../assets/styles/Main.scss";

const Main = () => {
  const globeRef = useRef<GlobeMethods | null>(null);
  const [globeSize, setGlobeSize] = useState({
    width: window.innerWidth * 0.8,
    height: window.innerHeight * 0.8,
  });

  // 📌 Adjust Globe Size Responsively
  useEffect(() => {
    const handleResize = () => {
      setGlobeSize({
        width: window.innerWidth * 0.8,
        height: window.innerHeight * 0.8,
      });
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 🌍 Ensure Continuous Rotation and Proper Camera Setup
  useEffect(() => {
    if (globeRef.current) {
      const controls = globeRef.current.controls();
      if (controls) {
        controls.autoRotate = true;
        controls.autoRotateSpeed = 1.2;
      }

      const camera = globeRef.current.camera();
      if (camera) {
        camera.position.set(250, 0, 250); // Adjust camera position
        camera.lookAt(new THREE.Vector3(0, 0, 0)); // Ensure camera looks at the center
      }
    }
  }, []);

  return (
    <div className="hero-container">
      {/* 🌍 3D Globe */}
      <div className="globe-background">
        <Globe
          ref={globeRef as React.MutableRefObject<GlobeMethods>}
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
          backgroundColor="rgba(0, 0, 0, 0)"
          showAtmosphere={true}
          atmosphereColor="#0085FF"
          atmosphereAltitude={0.3}
          width={globeSize.width}
          height={globeSize.height}
        />
      </div>

      {/* 👤 Profile Section */}
      <div className="about-section">
        <div className="image-wrapper">
          <img src={require("../assets/images/mine.JPG")} alt="Shivaram Emmidi" />
        </div>

        <div className="content">
          <h1>Shivaram Emmidi</h1>
          <p>Computer Science Graduate</p>

          {/* Social Icons & Resume */}
          <div className="social-resume-container">
            <a href="https://github.com/Shivaram0411" target="_blank" rel="noreferrer">
              <GitHubIcon />
            </a>
            <a href="https://www.linkedin.com/in/shivaram-emmidi/" target="_blank" rel="noreferrer">
              <LinkedInIcon />
            </a>
            <a href="/resume.pdf" download="Shivaram_Resume.pdf" className="resume-button">
              📥 Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
