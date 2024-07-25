import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Header from './components/Header';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer';
import Boxes from './components/Boxes';
import './App.css';
import styled from 'styled-components';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Boxes />
      <Footer />
      Just for testing
    </div>
  );
}

export default App;