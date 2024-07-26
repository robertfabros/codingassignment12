import React from 'react';
import { HashRouter, BrowserRouter, Route, Routes } from 'react-router-dom';
import TopNav from './components/TopNav/TopNav';
import Header from './components/Header';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer';
import Boxes from './components/Boxes';
import './App.css';
import './App.js'
import FrontEndDev from './components/FrontEndDev';
import ContactMe from './components/ContactMe';
import Section from './components/Section/Section';

// Function to determine which router to use
const getRouter = () => {
  // Check the hostname or any other environment-specific variable
  if (window.location.hostname === 'robertfabros.github.io') {
    return HashRouter;
  } else {
    return BrowserRouter;
  }
};

// Use the Router directly in the component
const App: React.FC = () => {
  const Router = getRouter();

  return (
    <Router>
      <Section className="main-section">
        <TopNav />
        <Header />
        <Routes>
          <Route path="/" element={<><Hero /><Boxes /></>} />
          <Route path="/front-end-dev" element={<FrontEndDev />} />
          <Route path="/contact-me" element={<ContactMe />} />
        </Routes>
        <Footer />
      </Section>
    </Router>
  );
}

export default App;
