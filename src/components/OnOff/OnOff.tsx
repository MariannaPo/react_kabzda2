import React, { useState } from "react";

export type PropsType = {
    on: boolean,
    onChange: (on: boolean)=>void
}

export const OnOff = (props: PropsType) => {


    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: props.on ? 'green' : 'white'
    };
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '3px',
        padding: '2px',
        backgroundColor: props.on ? 'white' : 'red'
    };
    const indicatorStyle = {
        width: '15px',
        height: '15px',
        borderRadius: '15px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: props.on ? 'green' : 'red'
    };

return(
<div>
    <div style={onStyle} onClick={()=>{props.onChange(true)}}>ON</div>
    <div style={offStyle} onClick={()=>{props.onChange(false)}}>OFF</div>
    <div style={indicatorStyle}></div>
</div>
)
}