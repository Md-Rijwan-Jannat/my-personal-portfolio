// App.js
import React, { useState, useEffect } from "react";
import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";
import FooterBottom from "./components/footer/FooterBottom";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Location from "./components/Location/Location";
import { LoadingSpinner } from "./components/ui/LoadingSpinner/LoadingSpinner";
import About from "./components/About/About";
import BackgroundGradientAnimation from "./components/ui/BackgroundGradientAnimation/BackgroundGradientAnimation";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if window.onload has already been triggered
    const checkWindowLoad = () => {
      if (document.readyState === "complete") {
        setIsLoading(false);
      }
    };

    // Check for window load after 500ms
    const timeout = setTimeout(checkWindowLoad, 500);

    // Cleanup
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`w-full h-auto bg-bodyColor text-lightText overflow-hidden ${
        isLoading ? "overflow-hidden" : ""
      }`}
    >
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <Navbar />
          <div className="max-w-screen-xl mx-auto px-3">
            <BackgroundGradientAnimation>
              <Banner />
            </BackgroundGradientAnimation>

            <Features />
            <Projects />
            <About />
            <Location />
            <Contact />
            <Footer />
            <FooterBottom />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
