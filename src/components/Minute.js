import React from 'react';


const Minute = ({setStartMinute, setEndMinute}) => {
    let minute = []
    let i = 0
    const setting = (setMinute) => {
        if(setStartMinute){
            setStartMinute(setMinute)
        } else {
            setEndMinute(setMinute)
        }
    }

    const minuteList = () => {
        for(i = 0; i <= 50; i+=10){
            let setMinute = `${i}분`
            minute.push(<li className="Time" onClick={setting(setMinute)}>{setMinute}</li>)
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