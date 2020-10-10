import React from 'react';

const Hour = () => {
    let timeList = []
    const makeTimeList = () => {
        for(let i = 0; i <= 24; i++){
            timeList.push(<li className="Time">{i}</li>)
        }
        return timeList
    }
    return (
        <>
            <div className="option_hour">
                <ul className="Select">
                    <li className="Time">오전 12시</li>
                    <li className="Time">오전 1시</li>
                    <li className="Time">오전 2시</li>
                    <li className="Time">오전 3시</li>
                    <li className="Time">오전 4시</li>
                    <li className="Time">오전 5시</li>
                    <li className="Time">오전 6시</li>
                    <li className="Time">오전 7시</li>
                    <li className="Time">오전 8시</li>
                    <li className="Time">오전 9시</li>
                    <li className="Time">오전 10시</li>
                    <li className="Time">오전 11시</li>
                    <li className="Time">오후 12시</li>
                    <li className="Time">오후 1시</li>
                    <li className="Time">오후 2시</li>
                    <li className="Time">오후 3시</li>
                    <li className="Time">오후 4시</li>
                    <li className="Time">오후 5시</li>
                    <li className="Time">오후 6시</li>
                    <li className="Time">오후 7시</li>
                    <li className="Time">오후 8시</li>
                    <li className="Time">오후 9시</li>
                    <li className="Time">오후 10시</li>
                    <li className="Time">오후 11시</li>
                    {makeTimeList()}
                </ul>
            </div>
        </>
    );
};

export default Hour;