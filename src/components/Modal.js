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

    const [handleEndMinute, setHandleEndMinute] = useState(false)
    const [handleEndHour, setHandleEndHour] = useState(false)
    const [handleEndDate, setHandleEndDate] = useState(false)
    const [handleStartMinute, setHandleStartMinute] = useState(false)
    const [handleStartHour, setHandleStartHour] = useState(false)
    const [handleStartDate, setHandleStartDate] = useState(false)

    const handleStartResult = useSelector(state => state.StartReducer)
    const handleEndResult = useSelector(state => state.EndReducer)

    useEffect(()=>{
        setHandleStartDate(handleStartResult.data)
    }, [handleStartResult])

    useEffect(()=>{
        setHandleEndDate(handleEndResult.data)
    }, [handleEndResult])


    useEffect(()=>{
            let changeMinute = (Math.round(Number(moment().format('mm')) / 10) *10).toString()
            if(changeMinute === '60') {
                changeMinute = 0
            } else if (Number(changeMinute) > 49 ) {
                changeMinute = 50
            }
            setStartMinute(`${changeMinute}분`)
            setEndMinute(`${changeMinute}분`)

            let changeHour = moment().format('H')
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

    return (
        <>
            { handle && <div className="Overlay" onClick={cancel}/>}
            { handle && <div className="Wrapper" >
                <div className="Inner">
                    <div className="ModalTitle">응시 기간 설정</div>
                    <div className="StartTitle">응시 시작일</div>
                    <div className="Top">
                        <div className="Box1" onClick={()=>{setHandleStartDate(!handleStartDate)}}>
                            <div className="Date">
                                {startDate.format('yyyy년 MM월 DD일')}
                            </div>
                            <img src={down_arrow} className="ic_arrow_drop_down" alt="#"/>

                        </div>
                        {
                            handleStartDate &&
                            <Calender setHandleStartDate={(value)=> {setHandleStartDate(value)}} startDate={startDate} setStartDate={(value)=>{setStartDate(value)}} setEndDate={(value)=>{setEndDate(value)}}/>
                        }
                        <div className="Box2" onClick={()=>{setHandleStartHour(!handleStartHour)}}>
                            <div className="Time">
                                {startHour}
                            </div>
                            <img src={down_arrow} className="ic_arrow_drop_down" alt="#"/>
                            {
                                handleStartHour &&
                                <Hour setStartHour={(value)=>{setStartHour(value)}}/>
                            }
                        </div>
                        <div className="Box2" onClick={()=>{setHandleStartMinute(!handleStartMinute)}}>
                            <div className="Time">
                                {startMinute}
                            </div>
                            <img src={down_arrow} className="ic_arrow_drop_down" alt="#"/>
                            {
                                handleStartMinute &&
                                <Minute setStartMinute={(value)=>{setStartMinute(value)}}/>
                            }
                        </div>
                    </div>
                    <hr className="Line"/>
                    <div className="EndTitle">응시 마감일</div>
                    <div className="Top">
                        <div className="Box1" onClick={()=> {setHandleEndDate(!handleEndDate)}}>
                            <div className="Date">
                                {endDate.format('yyyy년 MM월 DD일')}
                            </div>
                            <img src={down_arrow} className="ic_arrow_drop_down" alt="#"/>

                        </div>
                        {
                            handleEndDate &&
                            <Calender startDate={startDate} endDate={endDate} setEndDate={(value)=>{setEndDate(value)}} setHandleEndDate={(value)=>{setHandleEndDate(value)}}/>
                        }
                        <div className="Box2" onClick={()=>{setHandleEndHour(!handleEndHour)}}>
                            <div className="Time">
                                {endHour}
                            </div>
                            <img src={down_arrow} className="ic_arrow_drop_down" alt="#"/>
                            {
                                handleEndHour &&
                                <Hour setEndHour={(value)=>{setEndHour(value)}}/>
                            }
                        </div>

                        <div className="Box2" onClick={()=>setHandleEndMinute(!handleEndMinute)}>
                            <div className="Time">
                                {endMinute}
                            </div>
                            <img src={down_arrow} className="ic_arrow_drop_down" alt="#"/>
                            {
                                handleEndMinute &&
                                <Minute setEndMinute={(value)=>{setEndMinute(value)}}/>
                            }
                        </div>
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