import React from 'react';

const Minute = ({setStartMinute, setEndMinute}) => {
    let minute = []

    const setting = (x) => {
        if(setStartMinute){
            setStartMinute(x)
        } else {
            setEndMinute(x)
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