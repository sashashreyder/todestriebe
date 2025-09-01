import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Tour from './components/Tour';
import Shop from './components/Shop';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Starfield from './components/Starfield';
import BackgroundMusic from './components/BackgroundMusic';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen text-text-light relative">
        <Starfield />
        <Header />
        <main className="relative z-10">
          <Hero />
          <About />
          <Tour />
          <Shop />
          <Gallery />
          <Contact />
        </main>
        <Footer />
        <BackgroundMusic />
      </div>
    </LanguageProvider>
  );
}

export default App;