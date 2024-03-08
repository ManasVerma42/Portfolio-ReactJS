import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Cards from './Components/Cards';
import Footer from './Components/Footer';
import ScrollToTopButton from './Components/ScrollToTopButton';
import data from "./data";

export default function App() {
  const cards = data.map(item => {
      return (
        <Cards 
            key = {item.id}
            item = {item}        
        />
      )
  })


  return (
    <div className="App">

      <Navbar />
      <Hero />
      {cards}
      <Footer />
      <ScrollToTopButton />
      
    </div>
  );
}
