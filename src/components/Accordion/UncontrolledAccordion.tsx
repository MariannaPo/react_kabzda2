import React, { useState } from "react";

type UncontrolledAccordionPropsType = {
    title: string,
    //collapsed: boolean
  }
  export function UncontrolledAccordion(props:UncontrolledAccordionPropsType) {

    let [collapsed, setCollapsed] = useState(false);

    return(
        <div>
        <div>
          <AccordionTitle title={props.title} onClick={()=>{setCollapsed(!collapsed)}}/>
          {!collapsed && <AccordionBody/>}
        </div>
       
        </div>
      )
    }
    
  type AccordionTitlePropsType = {
    title: string, 
    onClick: ()=> void
  }
  
    function AccordionTitle (props: any) {

      const clickedAccordion=()=>{
        props.onClick()
      }

      return(
        <>
        <h3 onClick={clickedAccordion}>{props.title}</h3>
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
    export default UncontrolledAccordion;