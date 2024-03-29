import { type } from "os";
import React from "react";
import { preProcessFile } from "typescript";

export type RatingValuesType =  0 | 1 | 2 | 3 | 4 | 5;


type RatingPropsType = {
  value: RatingValuesType,
  onClick: (value: RatingValuesType) => void,

}

export function Rating (props: RatingPropsType) {
  return(
    <div>
        <Star selected={props.value > 0} onClick={props.onClick} value ={1}/>
        <Star selected={props.value > 1} onClick={props.onClick} value ={2}/>
        <Star selected={props.value > 2} onClick={props.onClick} value ={3}/>
        <Star selected={props.value > 3} onClick={props.onClick} value ={4}/>
        <Star selected={props.value > 4} onClick={props.onClick} value ={5}/>
    </div>
  )
}


type StarPropsType = {
  selected: boolean,
  value: RatingValuesType,
  onClick: (value: RatingValuesType) => void
}

  function Star (props:StarPropsType) {

    return (
      <span onClick={()=>{props.onClick(props.value)}}>{props.selected ? <b> star </b> : ' star '}</span>
    )
  }
  export default Rating;