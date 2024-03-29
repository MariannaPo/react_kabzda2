import React, { useCallback, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import Rating, { RatingValuesType } from './components/Rating/Rating';
import { type } from 'os';
import { OnOff } from './components/OnOff/OnOff';
import UncontrolledAccordion from './components/Accordion/UncontrolledAccordion';
import UncontrolledRating from './components/Rating/UncontrolledRating';
import { on } from 'events';
import { UncontrolledOnOff } from './components/OnOff/UncontrolledOnOff';

function App() {

let [ratingValue, setRatingValue] = useState<RatingValuesType>(4);
let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
let [switchOn, setSwitchOn] = useState<boolean>(false)
  return (
    <div className='App'>
      <UncontrolledAccordion title='kjkj'/>
      {/* <UncontrolledOnOff onChange={setSwitchOn}/> */}
      {/* <OnOff on={switchOn} onChange={(on)=>{setSwitchOn(on)}}/> */}
      {/* <Accordion title='Menu' collapsed={accordionCollapsed} onChange={()=>{setAccordionCollapsed(!accordionCollapsed)}}/> */}
       {/* <Accordion title={'numbers'} collapsed={true}/>
       <Accordion title={'date'} collapsed={false}/>
       <UncontrolledAccordion title='songs'/>
       <Rating value={0}/>
       <Rating value={1}/>
       <Rating value={2}/>
       <Rating value={3}/> */}
       {/* <Rating value={4}/>
       <Rating value={5}/> */}
       {/* <UncontrolledRating/> */}
       {/* <OnOff/> */}
       {/* <UncontrolledAccordion title={'Menu'} /> */}
       {/* <UncontrolledRating/>
       <Rating value={ratingValue} onClick={setRatingValue}/> */}
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
