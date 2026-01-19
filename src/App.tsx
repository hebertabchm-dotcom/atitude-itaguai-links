import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FamilyCourses from './components/FamilyCourses';
import VidaVitoriosa from './components/VidaVitoriosa';
import TrainingCourses from './components/TrainingCourses';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Navbar />
      <main>
        <Hero />
        <FamilyCourses />
        <VidaVitoriosa />
        <TrainingCourses />
      </main>
      <Footer />
    </div>
  );
}

export default App;
