import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Tour from './components/Tour';
import Shop from './components/Shop';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-coal text-text-light">
      <Header />
      <main>
        <Hero />
        <About />
        <Tour />
        <Shop />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
