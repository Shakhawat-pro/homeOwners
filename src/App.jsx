import './App.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';

function App() {

  return (
    <div className="h-full md:h-screen flex justify-center items-center bg-cover bg-center relative inter" style={{ backgroundImage: "url('/solar-panel.jpg')" }}>
      {/* black overlay */}
      <div className="absolute inset-0 bg-black opacity-65"></div>
      {/* main div */}
      <div className="max-w-[1260px] px-4 h-[97%] mx-auto  z-10 flex  flex-col justify-between max-md: gap-10">
        <Navbar />
        <Hero></Hero>
        <Footer />
      </div>
    </div>
  );
};



export default App
