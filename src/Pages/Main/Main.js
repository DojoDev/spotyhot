import React from 'react';
import Celsius from '../../Components/Celsius/Celsius';
import Player from '../../Components/Player/Player';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

export default function Main() {
  return (
    <div>
      <Header />
      <Celsius />
      <Player />
      <Footer />
    </div>
  );
}
