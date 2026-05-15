// import Navbar from "./components/Navbar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Contact from "./components/contact";
import Projects from "./components/Projects"; 

export default function App() {
  return (
    <>
    <div
      className="min-h-screen bg-cover bg-center bg-fixed bg-no-repeat px-2 sm:px-4 py-4 bg-[#111111]/95"
    >
<div className="w-full xl:max-w-[95%] 2xl:max-w-[70%] mx-auto bg-[#111111]/95 backdrop-blur-md rounded-2xl overflow-hidden border border-green-400/50 shadow-[0_0_40px_rgba(34,197,94,0.15)]">
        <Navbar />
        <Hero />
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
    </div>
    </>
  );
}