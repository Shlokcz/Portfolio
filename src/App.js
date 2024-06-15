import React, { useRef } from "react";
import './App.css';
import HeadingImg from './components/Header-img/HeaderImg';
import Navigation from './components/Navigation/Navigation';
// import HeaderContent from './components/Header-content/HeaderContent';
import TechStack from './components/TechStack/TechStack';
import Projects from './components/Projects/Projects';
import Certifications from './components/Certifications/Certifications';
import Aboutme from './components/Aboutme/Aboutme';
import Footer from './components/Footer/Footer';
// import DevIcons from "./DevIcons"
// import logo from './logo.svg';

function App() {
  const sectionRef = useRef(null);
  const sectionRef2 = useRef(null);
  const sectionRef3 = useRef(null);

  const handleScrollToSection = () => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToSection2 = () => {
    sectionRef2.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToSection3 = () => {
    sectionRef3.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      <Navigation onScrollToSection={handleScrollToSection} onScrollToSection2={handleScrollToSection2} />
      <HeadingImg ref={sectionRef3}/>
      <Aboutme />
      {/* <HeaderContent /> */}
      <TechStack />
      <Projects ref={sectionRef2}/>
      <Certifications ref={sectionRef}/>
      <Footer onScrollToSection={handleScrollToSection} onScrollToSection2={handleScrollToSection2} onScrollToSection3={handleScrollToSection3}/>
    </div>
  );
}

export default App;
