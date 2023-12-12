// import type { Meta, StoryObj } from '@storybook/react';
//
// import  Accordion from './Accordion';
// import React, {useState} from "react";
//
// const meta: Meta<typeof Accordion> = {
//   component: Accordion,
// };
//
// export default meta;
// type Story = StoryObj<typeof Accordion>;
//
// /*
//  *👇 Render functions are a framework specific feature to allow you control on how the component renders.
//  * See https://storybook.js.org/docs/api/csf
//  * to learn how to use render functions.
//  */
//
// export const Primary: Story = {
//   args: {
//     title: 'Hello',
//     collapsed: true,
//     onChange: ()=>{}
//   }
//   }
//
// export const CollapsedAcc = () => {
//   return <div> <Accordion title={'collapsedAcc'}
//                           collapsed={true}
//                           onChange={()=>{}}
//                          />
//           </div>
// }
// export const OpenedAcc = () => {
//   return <div>
//     <Accordion title={'openedAcc'}
//                collapsed={false}
//                onChange={()=>{}}
//                />
//   </div>
// }
//
// export const Acc = () => {
//   const [collapsed, setCollapsed]=useState(false)
//   return <div>
//     <Accordion title={'Acc'}
//                collapsed={collapsed}
//                onChange={()=>{setCollapsed(!collapsed)}}
//     />
//   </div>
// }


import {action} from '@storybook/addon-actions';
import {useState} from "react";
import Accordion from "./Accordion";
export default {
  title: 'Accordion',
  component: Accordion,
};

const callback = action('accordion clicked')
export const Open = () => <Accordion title={'true'} collapsed={false} onChange={callback}/>;
export const Close = () => <Accordion title={'false'} collapsed={true} onChange={callback}/>;

export const ModeAccordion = () => {
  const [onMode, setOnMode] = useState(false)
  return <Accordion title={"Example"} collapsed={onMode} onChange={()=>setOnMode(!onMode)}/>
}

// export const OnSwitch = () => {
//   const [onSwitch, setOnSwitch] = useState('true')
//   return  <Accordion on={onSwitch} onChange={setOnSwitch(!onSwitch)}/>
// };
//
//