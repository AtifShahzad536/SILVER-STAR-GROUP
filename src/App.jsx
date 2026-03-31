import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/home/Hero';
import Ticker from './components/home/Ticker';
import Footer from './components/layout/Footer';
import MyTraining from './components/home/MyTraining';
import GoalkeeperGlovesSection from './components/home/GoalkeeperGlovesSection';
import ClothingSection from './components/home/ClothingSection';
import EverythingSection from './components/home/EverythingSection';
import SustainabilitySection from './components/home/SustainabilitySection';
import FootballHistorySlider from './components/home/FootballHistorySlider';
import BlogSection from './components/home/BlogSection';
export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Ticker />
      <MyTraining />
      <GoalkeeperGlovesSection />
      <ClothingSection />
      <EverythingSection />
      <SustainabilitySection />
      <FootballHistorySlider />
      <BlogSection />
      <Footer />
    </div>
  );
}
