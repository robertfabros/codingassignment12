import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Header from './components/Header';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer';
import './App.css';
import styled from 'styled-components';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      {/* Other components or sections can go here */}
      <Footer />
    </div>
  );
}

export default App;