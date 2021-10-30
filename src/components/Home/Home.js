import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import NewsLetter from '../NewsLetter/NewsLetter';
import Services from '../Services/Services';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Home;
