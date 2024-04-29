import Navbar from './components/Navbar';
import Title from './components/Title';
import Footer from './components/Footer';
import Calculator from './components/Calculator/Index';
import About from './components/About/Index';
import Contact from './components/Contact/Index';

function App() {
  return (
    <section className=" h-screen w-full">
      <Navbar />
      <Title />
      <Calculator />
      <About />
      <Contact />
      <Footer />
    </section>
  );
}

export default App;
