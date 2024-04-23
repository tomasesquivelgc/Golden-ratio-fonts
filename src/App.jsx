import Navbar from "./components/Navbar";
import Title from "./components/Title";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <section className=" h-screen w-full">
        <Navbar />

        <Title />

        {/* Main content*/}
        <div className="w-full h-gr1 flex">
          <div className="w-gr2 h-full">
            {/* User Input */}
            <div className="w-full h-gr2 bg-gradient" />
            {/* Calculated numbers */}
            <div className="w-full h-gr1 bg-mikadoYellow" />
          </div>
          {/* Golden sized text */}
          <div className="w-gr1 h-full bg-white" />
        </div>

        <Footer />

      </section>
    </>
  );
}

export default App;
