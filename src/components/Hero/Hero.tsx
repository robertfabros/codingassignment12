import React from 'react';
import Text from '../Text/Text';
import MyButton from '../MyButton/MyButton';
import Image from '../Image/Image';

const Hero: React.FC = ({ children }) => (
  <section id="hero">
    <div className="frame_1">
      <Text className="text-wrapper" content="Hello. My name is Robert and I am a" tag="h1" />
      <Text className="front-end-dev" content="Front-End Dev & Graphic Designer" tag="h2" />
      <div className="buttons_main">
        <MyButton label="SERVICES" className="myServices" style={{ cursor: 'pointer' }} />
        <MyButton label="CONTACT ME" className="contact_me" style={{ cursor: 'pointer' }} />
      </div>
    </div>
    <div className="frame_2">
      <Image src="img/hero-profile.png" alt="Robert Fabros" className="hero-image" />
    </div>
    {children}
  </section>
);

export default Hero;
