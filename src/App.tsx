import React from 'react';
import logo from './logo.svg';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import Rating from './components/Rating/Rating';
import { type } from 'os';

function App() {
  return (
    <div>
      {/* <PageTitle title={"My components"}/>
      Article 1
      <Rating value={2}/>
      <PageTitle title={'Dont touch'}/> */}
      <Accordion title={'numbers'} collapsed={true}/>
       {/* Article 2
      <Rating value={3}/> */}
       <Accordion title={'date'} collapsed={false}/>
  
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
