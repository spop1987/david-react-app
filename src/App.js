import React from 'react'

import {Navbar} from './components';
import {Footer, Chef, Gallery, Header, Intro, Press, Drypastagallery} from './container'
import './App.css'

const App = () => {
  return(
    <div>
      <Navbar />
      <Header />
      <Chef />
      <Intro />
      <Drypastagallery/>
      <Gallery/>
      <Press/>
      <Footer />
    </div>
  );
};

export default App;
