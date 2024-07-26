import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer';
import Boxes from './components/Boxes';
import './App.css';
import './App.js'
import Navmobile from './components/Navmobile';
import FrontEndDev from './components/FrontEndDev';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Navmobile />
        <Header />
        <Routes>
          <Route path="/" element={<><Hero /><Boxes /></>} />
          <Route path="/front-end-dev" element={<FrontEndDev />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
