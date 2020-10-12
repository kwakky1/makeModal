import React from 'react';
import {useDispatch} from "react-redux";
import {startMinuteAction} from "../reducer/StartMinuteReducer";
import {endMinuteAction} from "../reducer/EndMinuteReducer";

const Minute = ({setStartMinute, setEndMinute}) => {
    let minute = []
    const dispatch = useDispatch()
    const setting = (x) => {
        if(setStartMinute){
            setStartMinute(x)
            dispatch(startMinuteAction(false))
        } else {
            setEndMinute(x)
            dispatch(endMinuteAction(false))
        }
    }

    const minuteList = () => {
        for(let i = 0; i <= 50; i+=10){
            let setMinute = `${i}분`
            minute.push(<li key={i.toString()} className="time_select_box" onClick={()=>{setting(setMinute)}}>{setMinute}</li>)
        }
        return minute
    }

    return (
        <>
            <div className="option_minute">
                <ul className="Select">
                    {minuteList()}
                </ul>
            </div>
        </>
    );
};

export default Minute;