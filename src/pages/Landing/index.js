import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Button';
import Logo from 'components/Logo';
import Footer from 'components/Footer';
import HairLoss from 'assets/hair-photo.png';
import SexPhoto from 'assets/sex-photo.png';
import {
  Hero,
  HeroText,
  ProductSection,
  ProductItem,
  NumberText,
  ProductDetails,
  ProductSpec,
  Text,
} from './Landing.styled';

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
      <ProductSection>
        <h2>What we can help with</h2>
        <ProductItem>
          <img src={HairLoss} alt='hair loss' />
          <ProductDetails>
            <NumberText>01</NumberText>
            <ProductSpec>
              <Text>Hair Loss</Text>
              <h5>Hair loss needn’t be irreversible. We can help!</h5>
              <p>
                Hair loss needn’t be irreversible. There’s a scientifically
                proven way that’s most effective in keeping and regrowing your
                hair. It’s all to do with blocking a pesky hormone called DHT.
                That’s the bad guy behind hair loss. And you can keep him at
                bay. The choice is yours.
              </p>
            </ProductSpec>
          </ProductDetails>
        </ProductItem>
        <ProductItem className='reversed'>
          <ProductDetails>
            <NumberText>02</NumberText>
            <ProductSpec className='reversed'>
              <Text>Erectile Dysfunction</Text>
              <h5>
                Erections can be a tricky thing. But no need to feel down!
              </h5>
              <p>
                There are plenty of reasons why you might be having difficulty
                in the erection department. We can help you figure out possible
                reasons why. And prescribe a pill if needed.
              </p>
            </ProductSpec>
          </ProductDetails>
          <img src={SexPhoto} alt='sex' />
        </ProductItem>
      </ProductSection>
      <Footer />
    </main>
  );
};

Landing.propTypes = {
  startQuiz: PropTypes.func,
};

export default Landing;
