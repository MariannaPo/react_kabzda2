import React from 'react';
import logo from './logo.svg';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import Rating from './components/Rating/Rating';

function App() {
  return (
    <div>
     <AppTitle/>
     <Rating/>
     <Accordion/>
    </div>
  );
}

function AppTitle () {
  return <>my components</>
}
export default App;
