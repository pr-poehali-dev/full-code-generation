
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import AboutCompany from '../components/AboutCompany';
import MissionGoals from '../components/MissionGoals';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <AboutCompany />
        <MissionGoals />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
