import React, { useState } from "react";

type UncontrolledAccordionPropsType = {
    title: string,
    //collapsed: boolean
  }
  function UncontrolledAccordion(props:UncontrolledAccordionPropsType) {

    let [collapsed, setCollapsed] = useState(false);

    return(
        <div>
        <div>
          <AccordionTitle title={props.title}/>
          <button onClick={()=>{setCollapsed(!collapsed)}}>TOGGLE</button>
          {!collapsed && <AccordionBody/>}
        </div>
       
        </div>
      )
    }
    
  type AccordionTitlePropsType = {
    title: string
  }
  
    function AccordionTitle (props: any) {

      return(
        <>
        <h3>{props.title}</h3>
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