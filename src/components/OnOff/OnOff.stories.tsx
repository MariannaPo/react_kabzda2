
import {action} from '@storybook/addon-actions';
import {OnOff,PropsType} from "./OnOff";
import {useState} from "react";
export default {
    title: 'OnOff',
    component: OnOff,
};

const callback = action('on or off clicked')
export const OnCo = () => <OnOff on={true} onChange={callback}/>;
export const OffCo = () => <OnOff on={false} onChange={callback}/>;

export const OnSwitch = () => {
  const [onSwitch, setOnSwitch] = useState(true)
    return  <OnOff on={onSwitch} onChange={setOnSwitch}/>
};

  