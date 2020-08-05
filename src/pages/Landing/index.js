import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Button';
import Logo from 'components/Logo';
import Footer from 'components/Footer';
import { Hero, HeroText } from './Landing.styled';

const Landing = ({ startQuiz }) => {
  return (
    <main>
      <Hero>
        <Logo />
        <HeroText>
          <div>Be good</div>
          <div>to yourself</div>
        </HeroText>
        <article>
          <p>
            We’re working around the clock to bring you a holistic approach to
            your wellness. From top to bottom, inside and out.
          </p>
        </article>
        <Button onClick={startQuiz}>TAKE THE QUIZ</Button>
      </Hero>
      <Footer />
    </main>
  );
};

Landing.propTypes = {
  startQuiz: PropTypes.func,
};

export default Landing;
