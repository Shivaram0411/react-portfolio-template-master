import React, { useState, useEffect, useMemo } from "react";
import {
  Main,
  Timeline,
  Expertise,
  Project,
  Contact,
  Navigation,
  Footer,
} from "./components";
import FadeIn from "./components/FadeIn";
import "./index.scss";

function App() {
  // ✅ Improved Dark/Light Mode Toggle
  const [mode, setMode] = useState<string>(
    localStorage.getItem("theme") || "dark"
  );

  const handleModeChange = () => {
    setMode((prevMode) => {
      const newMode = prevMode === "dark" ? "light" : "dark";
      localStorage.setItem("theme", newMode); // Save theme preference
      return newMode;
    });
  };

  // ✅ Apply Mode on Load
  useEffect(() => {
    document.body.className = mode;
  }, [mode]);

  // ✅ Smooth scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  // ✅ Memoized layout to avoid unnecessary re-renders
  const Layout = useMemo(
    () => (
      <FadeIn transitionDuration={700}>
        <Main />
        <Expertise />
        <Timeline />
        <Project />
        <Contact />
      </FadeIn>
    ),
    [] // Ensures it doesn't re-render unnecessarily
  );

  return (
    <div className={`main-container ${mode === "dark" ? "dark-mode" : "light-mode"}`}>
      <Navigation parentToChild={{ mode }} modeChange={handleModeChange} />
      {Layout}
      <Footer />
    </div>
  );
}

export default App;
