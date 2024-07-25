import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer';
import Boxes from './components/Boxes';
import './App.css';
import './App.js'
import Navmobile from './components/Navmobile';

const App: React.FC = () => {
  return (
    <div className="App">
      <Navmobile />
      <Header />
      <Hero />
      <Boxes />
      <Footer />
    </div>
  );
}

export default App;