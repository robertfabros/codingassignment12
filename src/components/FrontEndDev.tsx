import React from 'react';
import Image from './Image/Image';
import Text from './Text/Text';
import List from './List/List';

const programmingLanguages = [
  'HTML',
  'CSS',
  'Javascript',
  'PHP',
  'Python',
  'Ruby',
  'MySQL',
  'Java'
];

const FrontEndDev: React.FC = () => (
  <section id="innerp">
    <div className="page_title">
      <div className="polygon1">
        <div className="polytext1">FED</div>
      </div>
      <Text content="Front-End Development" tag="h1" />
    </div>

    <Text
      content={`I have been coding HTML and CSS for the past 10 years using Adobe Suites, Visual Studio Code and other coding platforms. I also develop websites using WordPress via Elementor and WP Bakery and other website builders. Here are some of the websites that I designed and developed using WordPress.`}
      className="innerpage_p"
    />
    <Text className="listInner" content='My Programming Languages' tag="h2" />

    <List items={programmingLanguages} className="programming-languages" />

    <div className="innerbox">
      <a href="https://propertys.com/" target="_blank" rel="noopener noreferrer">
        <div className="group">
          <div className="innergroup">
            <Image className="propertys" src="img/propertys1.png" alt="Propertys Website" />
            <Text content="Propertys.com" tag="h3" />
            <Text
              content="Propertys.com is a client from Louisville, Kentucky. They specialize on empowering Real Estate & Marketing Professionals to make better decisions, quickly with BehaviorSynK™."
            />
          </div>
        </div>
      </a>
      <a href="https://www.badgeraustralia.com.au/" target="_blank" rel="noopener noreferrer">
        <div className="innerwrapper">
          <div className="innergroup">
            <Image className="propertys" src="img/badger_australia.png" alt="Badger Australia" />
            <Text content="Badger Australia" tag="h3" />
            <Text
              content="Badger Australia is a client from Australia that sells work wear, footwear, headwear, and PPE. They make life easier by providing a fast and hassle-free supply of workwear."
            />
          </div>
        </div>
      </a>
    </div>
  </section>
);

export default FrontEndDev;
