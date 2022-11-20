import './App.css';
import Navbar from './Navbar';
import CreateNote from './CreateNote';
import React, { useState } from 'react';
import View_Note from './View_Note';

const Lazy = React.lazy(() => import('./View_Note'))
function App() {


  return (
    <div className="App">
      <Navbar />
      <CreateNote />
      <Lazy />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
