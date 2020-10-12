import React from 'react';
import {useDispatch} from "react-redux";
import {startHourAction} from "../reducer/StartHourReducer";
import {endHourAction} from "../reducer/EndHourReducer";

const Hour = ({setStartHour, setEndHour }) => {
    let timeList = []
    const dispatch = useDispatch()
    const setting = (value) => {
        if(setStartHour) {
            setStartHour(value)
            dispatch(startHourAction(false))
        } else {
            setEndHour(value)
            dispatch(endHourAction(false))
        }
    }

    const makeTimeList = () => {
        for(let i = 0; i <= 23; i++){
            let value
            if(i < 12 && i !== 0){
                value = `오전 ${i}시`
            } else if(i === 0) {
                value = `오전 12시`
            } else if(i > 12) {
                value = `오후 ${i-12}시`
            } else {
                value = `오후 12시`
            }
            timeList.push(<li key={i.toString()} onClick={()=>{setting(value)}} className="time_select_box">{value}</li>)
        }
        return timeList
    }
    return (
        <>
            <div className="option_hour">
                <ul className="Select">
                    {makeTimeList()}
                </ul>
            </div>
        </>
    );
};

export default Hour;