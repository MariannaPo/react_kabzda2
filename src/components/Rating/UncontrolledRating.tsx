import { type } from "os";
import React, { useState } from "react";
import { preProcessFile } from "typescript";
import UncontrolledAccordion from "../Accordion/UncontrolledAccordion";

type RatingPropsType = {
  //value: 0 | 1 | 2 | 3 | 4 | 5
}

function UncontrolledRating () {

    let [value, setValue] = useState(0);

  return(
    <div>
        <Star selected={value > 0} setValue={()=>{setValue(1)}} />
        <Star selected={value > 1} setValue={()=>{setValue(2)}}/>
        <Star selected={value > 2} setValue={()=>{setValue(3)}} />
        <Star selected={value > 3} setValue={()=>{setValue(4)}}/>
        <Star selected={value > 4} setValue={()=>{setValue(5)}} />
    </div>
  )
} 


type StarPropsType = {
  selected: boolean,
  // value: 1 | 2 | 3 | 4 | 5,
  setValue: ()=>void
}

  function Star (props:StarPropsType) {

    return <span onClick={()=>{props.setValue()}}>
      {props.selected ? <b>=star=</b> : ' star '}</span>
  }
  export default UncontrolledRating;