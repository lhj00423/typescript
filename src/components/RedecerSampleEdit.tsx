import React from 'react';
import { useSampleDispatch, useSampleState } from '../context/SampleContext';

const RedecerSampleEdit = () => {
    const state = useSampleState();
    const dispatch = useSampleDispatch();
    const setCount = () => dispatch({type:"SET_COUNT", count:5});
    const setText = () => dispatch({type:"SET_TEXT",text:"blue"});
    const setColor = () => dispatch({type:"SET_COLOR",color:"yellow"});
    const setToggle = () => dispatch({type:"SET_GOOD"});
    return (
        <div>
           <p>count: {state!.count} </p>
           <p>text: {state!.text} </p>
           <p>color: {state!.color} </p>
           <p>isGood: {state!.isGood ? "ture" : "false"} </p>
           <div>
            <button onClick={setCount}>SET_COUNT</button>
            <button onClick={setText}>SET_TEXT</button>
            <button onClick={setColor}>SET_COLOR</button>
            <button onClick={setToggle}>TOGGLE_GOOD</button>
           </div>
        </div>
    );
};

export default RedecerSampleEdit;