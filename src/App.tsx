import React from 'react';
import logo from './logo.svg';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import Rating from './components/Rating/Rating';
import { type } from 'os';
import { OnOff } from './components/OnOff/OnOff';
import UncontrolledAccordion from './components/Accordion/UncontrolledAccordion';
import UncontrolledRating from './components/Rating/UncontrolledRating';

function App() {
  return (
    <div className='App'>
       {/* <Accordion title={'numbers'} collapsed={true}/>
       <Accordion title={'date'} collapsed={false}/>
       <UncontrolledAccordion title='songs'/>
       <Rating value={0}/>
       <Rating value={1}/>
       <Rating value={2}/>
       <Rating value={3}/> */}
       {/* <Rating value={4}/>
       <Rating value={5}/> */}
       <UncontrolledRating/>
       {/* <OnOff/> */}
     </div>
  );
}

type PageTitlePropsType = {
  title: string
}

function PageTitle (props: PageTitlePropsType) {
  return <h3>{props.title}</h3>
}
export default App;
