import React, {useState} from 'react';
import down_arrow from '../img/ic-arrow-drop-down.svg'
import Minute from "./Minute";
import Hour from "./Hour";
import Calender from "./Calender";
import moment from "moment";

const Modal = ({openModal, setClose}) => {

    const [startDate, setStartDate] = useState(moment())
    const [startHour, setStartHour] = useState(moment().format('HH'))
    const [startMinute, setStartMinute] = useState(moment().format('mm'))
    const [endDate, setEndDate] = useState(moment())
    const [endHour, setEndHour] = useState("오전 9시")
    const [endMinute, setEndMinute] = useState("30분")

    const [handleEndMinute, setHandleEndMinute] = useState(false)
    const [handleEndHour, setHandleEndHour] = useState(false)
    const [handleEndDate, setHandleEndDate] = useState(false)
    const [handleStartMinute, setHandleStartMinute] = useState(false)
    const [handleStartHour, setHandleStartHour] = useState(false)
    const [handleStartDate, setHandleStartDate] = useState(false)

    return (
        <>
            { openModal && <div className="Overlay" onClick={()=>setClose(false)}/>}
            { openModal && <div className="Wrapper" >
                <div className="Inner">
                    <div className="ModalTitle">응시 기간 설정</div>
                    <div className="StartTitle">응시 시작일</div>
                    <div className="Top">
                        <div className="Box1" onClick={()=>{setHandleStartDate(!handleStartDate)}}>
                            <div className="Date">
                                {startDate.format('yyyy년 MM월 DD일')}
                            </div>
                            <img src={down_arrow} className="ic_arrow_drop_down" alt="#"/>
                            {
                                handleStartDate &&
                                <Calender startDate={startDate} setStartDate={(value)=>{setStartDate(value)}} setEndDate={(value)=>{setEndDate(value)}}/>
                            }
                        </div>
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
                        <div className="Box1" onClick={()=>{setHandleEndDate(!handleEndDate)}}>
                            <div className="Date">
                                {endDate.format('yyyy년 MM월 DD일')}
                            </div>
                            <img src={down_arrow} className="ic_arrow_drop_down" alt="#"/>
                            {
                                handleEndDate &&
                                <Calender startDate={startDate} endDate={endDate} setEndDate={(value)=>{setEndDate(value)}} setHandleEndDate={(value)=>{setHandleEndDate(value)}}/>
                            }
                        </div>
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
                                <Minute SetEndMinute={(value)=>{setEndMinute(value)}}/>
                            }
                        </div>
                    </div>
                    <div className="Bottom">
                        <div className="Btn">
                            <div className="Text" onClick={()=>setClose(false)}>취소</div>
                        </div>
                        <div className="CompleteBtn">
                            <div className="Text">완료</div>
                        </div>
                    </div>
                </div>
            </div>}
        </>
    );
};


export default Modal;