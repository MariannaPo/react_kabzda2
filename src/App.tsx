import React from 'react';
import logo from './logo.svg';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import Rating from './components/Rating/Rating';

function App() {
  return (
    <div>
     <PageTitle title={"My components"}/>
     Article 1
     <Rating value={2}/>
     <PageTitle title={'Dont touch'}/>
     <Accordion title={'numbers'}/>
     Article 2
     <Rating value={3}/>
     <Accordion title={'date'}/>
  
         </div>
  );
}

function PageTitle (props: any) {
  return <h3>{props.title}</h3>
}
export default App;
