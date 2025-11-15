import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Activities from './components/Activities';
import BookPromo from './components/BookPromo';
import Donations from './components/Donations';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Activities />
      <BookPromo />
      <Donations />
      <Footer />
    </div>
  );
}

export default App;