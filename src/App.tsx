import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import './App.css';
import MyButton from './components/MyButton/MyButton';
import HeroComponent from './components/Hero/Hero';
import ImageComponent from './components/Image/Image';
import TextComponent from './components/Text/Text';
import LabelComponent from './components/Label/Label';
import styled from 'styled-components';


// Styled components for flex layout
const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px; /* Space between items */
  justify-content: space-around; /* Distribute items evenly */
`;

const FlexItem = styled.div`
  flex: 1 1 30%; /* Flex grow, shrink, and basis to make 3 columns */
  min-width: 250px; /* Minimum width to ensure items don't shrink too small */
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

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
