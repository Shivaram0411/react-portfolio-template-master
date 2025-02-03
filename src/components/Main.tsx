import React, { useRef, useEffect, useState } from "react";
import Globe, { GlobeMethods } from "react-globe.gl";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import * as THREE from "three"; // Ensure WebGL stability
import "../assets/styles/Main.scss";

function Main() {
  const globeRef = useRef<GlobeMethods | null>(null);
  const [globeSize, setGlobeSize] = useState({
    width: window.innerWidth * 1.2, // Increased size
    height: window.innerHeight * 1.2,
  });

  // 📌 Adjust Globe Size Responsively
  useEffect(() => {
    const handleResize = () => {
      setGlobeSize({
        width: window.innerWidth * 1.2, // Increased size
        height: window.innerHeight * 1.2,
      });
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 🌍 Ensure Continuous Rotation and Proper Camera Setup
  useEffect(() => {
    const globe = globeRef.current;
    if (!globe) return;

    // Enable auto-rotate and set camera position
    const enableAutoRotate = () => {
      const controls = globe.controls();
      if (controls) {
        controls.autoRotate = true;
        controls.autoRotateSpeed = 2; // Increased rotation speed
      }
    };

    // Start auto-rotate
    enableAutoRotate();

    // Set up a render loop to keep the globe rotating smoothly
    const animate = () => {
      requestAnimationFrame(animate);
      const controls = globe.controls();
      if (controls) {
        controls.update(); // Required for auto-rotate to work
      }
    };

    animate();

    // Cleanup
    return () => {
      if (globe) {
        const controls = globe.controls();
        if (controls) {
          controls.autoRotate = false; // Disable auto-rotate on unmount
        }
      }
    };
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
          onGlobeReady={() => {
            if (globeRef.current) {
              const controls = globeRef.current.controls();
              controls.autoRotate = true;
              controls.autoRotateSpeed = 2; // Increased rotation speed

              const camera = globeRef.current.camera();
              if (camera) {
                camera.position.set(300, 0, 300); // Adjust camera position
                camera.lookAt(new THREE.Vector3(0, 0, 0)); // Ensure camera looks at the center
              }
            }
          }}
        />
      </div>

      {/* 👤 Profile Section */}
      <div className="about-section">
        <div className="image-wrapper">
          <img src={require("../assets/images/mine.JPG")} alt="Shivaram Emmidi" />
        </div>

        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/Shivaram0411" target="_blank" rel="noreferrer">
              <GitHubIcon />
            </a>
            <a href="https://www.linkedin.com/in/shivaram-emmidi/" target="_blank" rel="noreferrer">
              <LinkedInIcon />
            </a>
          </div>

          <h1>Shivaram Emmidi</h1>
          <p>Computer Science Graduate</p>

          {/* 📄 Resume Download */}
          <div className="resume-button">
            <button onClick={() => window.open("/resume.pdf", "_blank")}>Download Resume</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;