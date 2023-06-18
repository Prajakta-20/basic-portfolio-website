import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import Title from "./components/Title"
import About from "./components/About";
import Footer from "./components/Footer";
import ProjectSection from "./components/ProjectSection";
import SkillSection from "./components/SkillSection";
import RecommendationSection from "./components/RecommendationSection";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Title name="Prajakta Vanjare" leadText="I am a freelancer from India" />
      <RecommendationSection />
      <SkillSection />
      <ProjectSection />
      <About />
      <Contact />
      <Footer />
    </div>

  );
}

export default App;
