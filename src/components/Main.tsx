import React, { useRef, useEffect, useState } from "react";
import Globe from "react-globe.gl";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../assets/styles/Main.scss";

const Main: React.FC = () => {
  const globeRef = useRef<any>(null);
  const [globeSize, setGlobeSize] = useState({
    width: window.innerWidth * 0.8,
    height: window.innerHeight * 0.8,
  });

  useEffect(() => {
    const handleResize = () => {
      setGlobeSize({
        width: window.innerWidth * 0.8,
        height: window.innerHeight * 0.8,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (globeRef.current) {
      globeRef.current.controls().autoRotate = true;
      globeRef.current.controls().autoRotateSpeed = 1.2;
      const camera = globeRef.current.camera();
      camera.position.set(300, 0, 300);
      camera.lookAt(0, 0, 0);
    }
  }, []);

  return (
    <div className="hero-container">
      {/* 🌍 3D Globe */}
      <div className="globe-background">
        <Globe
          ref={globeRef}
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
          <img src="/assets/images/mine.JPG" alt="Shivaram Emmidi" />
        </div>

        <div className="content">
          <h1>Shivaram Emmidi</h1>
          <p>Computer Science Graduate</p>

          {/* 🔗 Social Icons & Resume */}
          <div className="social-resume-container">
            <a
              href="https://github.com/Shivaram0411"
              target="_blank"
              rel="noreferrer"
              className="social-icon"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/shivaram-emmidi/"
              target="_blank"
              rel="noreferrer"
              className="social-icon"
            >
              <LinkedInIcon />
            </a>
            <a href="/resume.pdf" className="resume-button" download>
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
