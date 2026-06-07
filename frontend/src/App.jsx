import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Public/home";
import Appointment from "./Public/Appointment";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./Public/About"; 
import Gallery from "./Public/Gallery";
import Doctors from "./Public/Doctors";
import Contact from "./Public/Contact";
import Services from "./Public/Services";

import ScrollToTop from "./components/scrolltotop";
function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/about" element={<About/>} />
        <Route path="/doctors" element={<Doctors/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/services" element={<Services/>} /> 
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;