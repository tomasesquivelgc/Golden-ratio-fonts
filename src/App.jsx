import Navbar from "./components/Navbar";
import Title from "./components/Title";
import Footer from "./components/Footer";
import Calculator from "./components/Calculator/Index";

function App() {
  return (
    <section className=" h-screen w-full">
      <Navbar />
      <Title />
      <Calculator />
      <Footer />
    </section>
  );
}

export default App;
