import React from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Button from './Components/Button';
import AvailableProducts from './Components/Products/AvailableProduct'

function App() {
  return (
    <>
      <Header/>
      <AvailableProducts/>
      <Button/>
      <Footer/>
    </>
  );
}

export default App;