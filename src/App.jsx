import Feature from './components/Feature';
import Footer from './components/Footer';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Workflow from './components/Workflow';

function App() {
  return (
    <>
      <NavBar />
      <div className='max-w-7xl mx-auto pt-20 px-4'>
        <Hero />
        <Feature />
        <Workflow />
        <Pricing />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
}

export default App;
