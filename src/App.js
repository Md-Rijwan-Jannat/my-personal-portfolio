// App.js
import React, { useState, useEffect } from "react";
import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";
import FooterBottom from "./components/footer/FooterBottom";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import Location from "./components/Location/Location";
import { LoadingSpinner } from "./components/ui/LoadingSpinner/LoadingSpinner";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Clear the timeout on unmount
    return () => clearTimeout(delay);
  }, []);

  return (
    <div className="w-full h-auto bg-bodyColor text-lightText">
      {isLoading ? (
        <LoadingSpinner></LoadingSpinner>
      ) : (
        <div className="max-w-screen-xl mx-auto px-3">
          <Navbar />
          <Banner />
          <Features />
          <Projects />
          <Resume />
          <Location />
          <Contact />
          <Footer />
          <FooterBottom />
        </div>
      )}
    </div>
  );
}

export default App;
