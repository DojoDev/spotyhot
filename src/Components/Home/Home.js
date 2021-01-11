import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Celsius from '../Celsius/Celsius';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Player from '../Player/Player';



export default function Home() {
  return (
    <div >
      <main>
       <Celsius/>
       <Player/>
      </main>
    </div>
  );
}
