import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FamilyCourses from './components/FamilyCourses';
import VidaVitoriosa from './components/VidaVitoriosa';
import Batismo from './components/Batismo';
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
        <Batismo />
        <TrainingCourses />
      </main>
      <Footer />
    </div>
  );
}

export default App;
