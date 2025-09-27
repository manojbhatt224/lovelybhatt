'use client';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Experience from './components/Experience';

export default function Home() {
  
  return (
 <div className="min-h-screen text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
                <Skills />
                <Experience/>
        

        <Contact />
      </main>
      <footer className="py-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} LovelyBhatt
      </footer>
    </div>
  );
}
