import React from "react";
import { homeStyles } from "./HomeStyles";
import Header from "./Sections/Header/Header";
import About from "./Sections/About/About";
import PeopleCategorySection from "./Sections/PeopleCategorySection/PeopleCategorySection";
import ProgramPhasesSection from "./Sections/ProgramPhasesSection/ProgramPhasesSection";
import LearningStacksSection from "./Sections/LearningStacksSection/LearningStacksSection";
import Navbar from "./Sections/Navbar/Navbar";

const Home = () => {
  const classes = homeStyles();
  return (
    <div className={classes.mainContainer}>
      {/* Navbar */}
      <Navbar />

      {/* Header */}
      <Header />

      {/* About */}
      <About />

      {/* Selected People Section */}
      <PeopleCategorySection />

      {/* Program Phases Section */}
      <ProgramPhasesSection />

      {/* Learning Stacks Section */}
      <LearningStacksSection />
    </div>
  );
};

export default Home;
