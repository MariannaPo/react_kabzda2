import { type } from "os";
import React from "react";
import { preProcessFile } from "typescript";

type RatingPropsType = {
  value: 0 | 1 | 2 | 3 | 4 | 5
}

function Rating (props: RatingPropsType) {
  return(
    <div>
        <Star selected={props.value > 0}/>
        <Star selected={props.value > 1}/>
        <Star selected={props.value > 2}/>
        <Star selected={props.value > 3}/>
        <Star selected={props.value > 4}/>
    </div>
  )
}


type StarPropsType = {
  selected: boolean
}

  function Star (props:StarPropsType) {
    if (props.selected === true) {
      return  <div><b>=star=</b></div>
    } else {
      return <div>star</div>
    }
  }
  export default Rating;