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
        <Star selected={value > 0} setValue={setValue} value={1}/>
        <Star selected={value > 1} setValue={setValue} value={2}/>
        <Star selected={value > 2} setValue={setValue} value={3}/>
        <Star selected={value > 3} setValue={setValue} value={4}/>
        <Star selected={value > 4} setValue={setValue} value={5}/>
    </div>
  //      <div>
  //      <Star selected={value > 0}/><button onClick={()=>{setValue(1)}}>1</button>
  //      <Star selected={value > 1}/><button onClick={()=>{setValue(2)}}>2</button>
  //      <Star selected={value > 2}/><button onClick={()=>{setValue(3)}}>3</button>
  //      <Star selected={value > 3}/><button onClick={()=>{setValue(4)}}>4</button>
  //      <Star selected={value > 4}/><button onClick={()=>{setValue(5)}}>5</button>
  //  </div>
  )
} 


type StarPropsType = {
  selected: boolean,
  value: 1 | 2 | 3 | 4 | 5,
  setValue: (value: 1 | 2 | 3 | 4 | 5)=>void
}

  function Star (props:StarPropsType) {

    return <span onClick={()=>{props.setValue(props.value)}}>{props.selected ? <b>=star=</b> : ' star '}</span>
  }
  export default UncontrolledRating;