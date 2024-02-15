import React from "react";
import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import Offers from "./components/Offers.jsx";
import Plans from "./components/Plans.jsx";
import Rooms from "./components/Rooms.jsx";
import ImageSlider from "./components/ImageSlider.jsx";
import Footer from "./components/Footer.jsx";
function App() {
  return (
    <div className="App">
       <Navbar/>
       <Hero/>
       <Offers/>
       <Plans/>
       <Rooms/>
       <ImageSlider/>
       <Footer/>
    </div>
  );
}

export default App;
