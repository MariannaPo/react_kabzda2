import React from 'react';
import logo from './logo.svg';
import './App.css';

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

function Star () {
  return (
    <div>star</div>
  )
}

function Rating () {
  return (
    <div>
      <Star/>
      <Star/>
      <Star/>
    </div>
  )
}

function Accordion () {
  return(
    <div>
      <AccordionTitle/>
      <AccordionBody/>
    </div>
  )
}

function AccordionTitle () {
  return(
    <>
    <h3>Menu</h3>
    </>
  )
}

function AccordionBody () {
  return (
    <>
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </>
  )
}

export default App;
