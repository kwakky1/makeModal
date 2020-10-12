import React, {useEffect, useState} from 'react';
import down_arrow from '../img/ic-arrow-drop-down.svg'
import Minute from "./Minute";
import Hour from "./Hour";
import Calender from "./Calender";
import moment from "moment";
import {useSelector} from "react-redux";

const Modal = ({handle, setHandle}) => {

    const [startDate, setStartDate] = useState(moment())
    const [startHour, setStartHour] = useState('')
    const [startMinute, setStartMinute] = useState('')
    const [endDate, setEndDate] = useState(moment())
    const [endHour, setEndHour] = useState('')
    const [endMinute, setEndMinute] = useState('')

    const [handleStartHour, setHandleStartHour] = useState(false)
    const [handleStartMinute, setHandleStartMinute] = useState(false)
    const [handleEndDate, setHandleEndDate] = useState(false)
    const [handleEndHour, setHandleEndHour] = useState(false)
    const [handleEndMinute, setHandleEndMinute] = useState(false)

    const handleDateResult = useSelector(state => state.DateReducer)
    const handleStartHourResult = useSelector(state => state.StartHourReducer)
    const handleEndHourResult = useSelector(state => state.EndHourReducer)
    const handleStartMinuteResult = useSelector(state => state.StartMinuteReducer)
    const handleEndMinuteResult = useSelector(state => state.EndMinuteReducer)

    useEffect(()=>{
        setHandleEndDate(handleDateResult.data)
    }, [handleDateResult])

    useEffect(()=>{
        setHandleStartHour(handleStartHourResult.data)
    },[handleStartHourResult])

    useEffect(()=>{
        setHandleEndHour(handleEndHourResult.data)
    },[handleEndHourResult])

    useEffect(()=>{
        setHandleStartMinute(handleStartMinuteResult.data)
    },[handleStartMinuteResult])

    useEffect(()=>{
        setHandleEndMinute(handleEndMinuteResult.data)
    },[handleEndMinuteResult])


    useEffect(()=>{
            let changeMinute = (Math.round(Number(moment().format('mm')) / 10) *10).toString()
            let changeHour = moment().format('H')
            if(changeMinute === '60') {
                changeMinute = 0
                changeHour = (Number(changeHour) + 1).toString()
            } else if (Number(changeMinute) > 49 ) {
                changeMinute = 50
            }
            setStartMinute(`${changeMinute}분`)
            setEndMinute(`${changeMinute}분`)

            if(changeHour === '0') {
                changeHour = '오전 12시'
            } else if(changeHour > 0 && changeHour < 12) {
                changeHour = `오전 ${changeHour}시`
            } else if(changeHour === '12') {
                changeHour = `오후 12시`
            } else {
                changeHour = `오후 ${changeHour-12}시`
            }
            setStartHour(changeHour)
            setEndHour(changeHour)
    },[])

    const complete = () => {
        const startValue = `${startDate.format('yyyy년 MM월 DD일')} ${startHour} ${startMinute}`
        const endValue = `${endDate.format('yyyy년 MM월 DD일')} ${endHour} ${endMinute}`
        sessionStorage.setItem('start', JSON.stringify(startValue))
        sessionStorage.setItem('end', JSON.stringify(endValue))
        setHandle(false)
    }

    const cancel = () => {
        setHandle(false)
        window.location.reload()
    }

    const isActiveDate = handleEndDate === true ? 'box_active': ''
    const isActiveStartHour = handleStartHour === true ? 'box_active': ''
    const isActiveEndHour = handleEndHour === true ? 'box_active': ''
    const isActiveStartMinute = handleStartMinute === true ? 'box_active': ''
    const isActiveEndMinute = handleEndMinute === true ? 'box_active': ''

    return (
        <>
            { handle && <div className="Overlay" onClick={cancel}/>}
            { handle && <div className="Wrapper" >
                <div className="Inner">
                    <div className="ModalTitle">응시 기간 설정</div>
                    <div className="StartTitle">응시 시작일</div>
                    <div className="Top">
                        <div className="Box1">
                            <div className="Date">
                                {startDate.format('yyyy년 MM월 DD일')}
                            </div>
                            <img src={down_arrow} className="ic_arrow_drop_down" alt="#"/>
                        </div>
                        <div className={`Box2 ${isActiveStartHour}`} onClick={()=>{setHandleStartHour(!handleStartHour)}}>
                            <div className="Time">
                                {startHour}
                            </div>
                            <img src={down_arrow} className="ic_arrow_drop_down" alt="#"/>
                        </div>
                        {
                            handleStartHour &&
                            <Hour setStartHour={(value)=>{setStartHour(value)}}/>
                        }
                        <div className={`Box2 ${isActiveStartMinute}`} onClick={()=>{setHandleStartMinute(!handleStartMinute)}}>
                            <div className="Time">
                                {startMinute}
                            </div>
                            <img src={down_arrow} className="ic_arrow_drop_down" alt="#"/>

                        </div>
                        {
                            handleStartMinute &&
                            <Minute setStartMinute={(value)=>{setStartMinute(value)}}/>
                        }
                    </div>
                    <hr className="Line"/>
                    <div className="EndTitle">응시 마감일</div>
                    <div className="Top">
                        <div className={`Box1 ${isActiveDate}`} onClick={()=> {setHandleEndDate(!handleEndDate)}}>
                            <div className="Date">
                                {endDate.format('yyyy년 MM월 DD일')}
                            </div>
                            <img src={down_arrow} className="ic_arrow_drop_down" alt="#"/>

                        </div>
                        {
                            handleEndDate &&
                            <Calender startDate={startDate} endDate={endDate} setStartDate={(value)=>{setStartDate(value)}} setEndDate={(value)=>{setEndDate(value)}} setHandleEndDate={(value)=>{setHandleEndDate(value)}}/>
                        }
                        <div className={`Box2 ${isActiveEndHour}`} onClick={()=>{setHandleEndHour(!handleEndHour)}}>
                            <div className="Time">
                                {endHour}
                            </div>
                            <img src={down_arrow} className="ic_arrow_drop_down" alt="#"/>
                        </div>
                        {
                            handleEndHour &&
                            <Hour setEndHour={(value)=>{setEndHour(value)}}/>
                        }
                        <div className={`Box2 ${isActiveEndMinute}`} onClick={()=>setHandleEndMinute(!handleEndMinute)}>
                            <div className="Time">
                                {endMinute}
                            </div>
                            <img src={down_arrow} className="ic_arrow_drop_down" alt="#"/>
                        </div>
                        {
                            handleEndMinute &&
                            <Minute setEndMinute={(value)=>{setEndMinute(value)}}/>
                        }
                    </div>
                    <div className="Bottom">
                        <div className="Btn" onClick={cancel}>
                            <div className="Text">취소</div>
                        </div>
                        <div className="CompleteBtn">
                            <div className="Text" onClick={complete}>완료</div>
                        </div>
                    </div>
                </div>
            </div>}
        </>
    );
};


export default Modal;