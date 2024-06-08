
import React from 'react';
import { Meta, Story } from '@storybook/react';
import Hero from './Hero';
import { HeroProps } from './Hero.types';

export default {
  title: 'Components/Hero',
  component: Hero,
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
    backgroundImage: { control: 'text' },
    className: { control: 'text' },
    isVisible: { control: 'boolean' },
    disabled: { control: 'boolean' },
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<HeroProps & { isVisible: boolean; backgroundColor: string }> = ({
  isVisible,
  disabled,
  backgroundColor,
  ...args
}) => {
  const heroStyle = {
    backgroundImage: args.backgroundImage ? `url(${args.backgroundImage})` : undefined,
    backgroundColor: disabled ? backgroundColor : '',
    cursor: disabled ? 'not-allowed' : 'default',
    opacity: disabled ? 0.5 : 1,
    padding: '20px',
    textAlign: 'center',
    display: isVisible ? 'block' : 'none', // Use CSS to hide
  };

  return (
    <div style={heroStyle} className={args.className}>
      <h1>{args.title}</h1>
      {args.subtitle && <h2>{args.subtitle}</h2>}
    </div>
  );
};

export const DefaultHero = Template.bind({});
DefaultHero.args = {
  title: 'Hero Title',
  subtitle: 'This is a subtitle',
  backgroundImage: 'https://via.placeholder.com/800x200',
  className: 'hero-class',
  isVisible: true,
  disabled: false,
  backgroundColor: '#ccc',
};

export const DisabledHero = Template.bind({});
DisabledHero.args = {
  ...DefaultHero.args,
  disabled: true,
  backgroundColor: '#ccc',
};
