import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
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

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      {/* Flex Container for Components */}
      <FlexContainer>
        {/* MyButton Component Section */}
        <FlexItem>
          <Section>
            <h5>MyButton Component</h5>
            <MyButton>Primary Button</MyButton>
          </Section>
        </FlexItem>

        {/* Hero Component Section */}
        <FlexItem>
          <Section>
            <h5>Hero Component</h5>
            <HeroComponent disabled={false}>This is a Hero Component</HeroComponent>
            <HeroComponent disabled={true}>This is a Disabled Hero Component</HeroComponent>
          </Section>
        </FlexItem>

        {/* Image Component Section */}
        <FlexItem>
          <Section>
            <h5>Image Component</h5>
            <ImageComponent size="large" round={true} src={reactLogo} />
            <ImageComponent size="small" disabled={true} src={viteLogo} />
          </Section>
        </FlexItem>

        {/* Text Component Section */}
        <FlexItem>
          <Section>
            <h5>Text Component</h5>
            <TextComponent size="large" bold={true} underline={true}>
              Large Bold Underlined Text
            </TextComponent>
            <TextComponent size="medium" disabled={true}>
              Disabled Medium Text
            </TextComponent>
          </Section>
        </FlexItem>

        {/* Label Component Section */}
        <FlexItem>
          <Section>
            <h5>Label Component</h5>
            <LabelComponent type="primary">Primary Label</LabelComponent>
            <LabelComponent type="error">Error Label</LabelComponent>
            <LabelComponent type="success">Success Label</LabelComponent>
          </Section>
        </FlexItem>
      </FlexContainer>
    </>
  );
}

export default App;
