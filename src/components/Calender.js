import React, {useState} from 'react';
import moment from "moment";
import forward_arrow from '../img/ic-arrow-forward.svg'
import back_arrow from '../img/ic-arrow-back.svg'
import {useDispatch} from "react-redux";
import {startAction} from "../reducer/StartReducer";
import {endAction} from "../reducer/EndReducer";

const Calender = ({setStartDate, setEndDate, startDate, endDate}) => {

    const [today, setToday] = useState(moment())
    const [from, setFrom] = useState()
    const [to, setTo] = useState()

    const dispatch = useDispatch()
    const generate = () => {
        const date = setStartDate ? moment(startDate) : moment(endDate)
        const yesterday = moment().add(-1, "day")
        const startDate_m = moment(startDate).add(-1,"day");
        const startWeek = today.clone().startOf('month').week();
        const endWeek = today.clone().endOf('month').week() === 1 ? 53 : today.clone().endOf('month').week();
        let calendar = [];
        for (let week = startWeek; week <= endWeek; week++) {
            calendar.push(
                <div className="row" key={week}>
                    {
                        Array(7).fill(1).map((n, i) => {
                            let current = today.clone().week(week).startOf('week').add(n + i, 'day')
                            let isSelected = date.format('YYYYMMDD') === current.format('YYYYMMDD') || (current >= startDate && current <= endDate) ? 'selected' : '';
                            let isGrayed = current.format('MM') !== today.format('MM') || (!setStartDate && startDate_m >= current) || yesterday > current ? 'grayed' : '';
                            const setting = () => {
                                if(isGrayed) {
                                    return
                                }
                                if(setStartDate){
                                    setStartDate(current)
                                    setEndDate(current)
                                    dispatch(startAction(false))
                                } else {
                                    setEndDate(current)
                                    dispatch(endAction(false))
                                }
                            }
                            return (
                                <div className={`box  ${isSelected} ${isGrayed} `} key={i} onClick={setting} aria-disabled={!isGrayed} >
                                    <span className={`week_number`} >{current.format('D')}</span>
                                </div>
                            )
                        })
                    }
                </div>
            )
        }
        return calendar;
    }

    return (
        <>
            <div className="Calendar">
                <div className="Head">
                    <div className="title">{today.format('yyyy년 MM월')}</div>
                    <div className="arrow_box">
                        <div className="back_arrow" onClick={()=>{setToday(today.clone().subtract(1,'month'))}}>
                            <img className="back_image" src={back_arrow} alt="#"/>
                        </div>
                        <div className="forward_arrow" onClick={()=>{setToday(today.clone().add(1,'month'))}}>
                            <img className="forward_image" src={forward_arrow} alt="#"/>
                        </div>
                    </div>
                </div>
                <div className="body">
                    <div className="row">
                        <div className="box_top">
                            <span className="week_day">월</span>
                        </div>
                        <div className="box_top">
                            <span className="week_day">화</span>
                        </div>
                        <div className="box_top">
                            <span className="week_day">수</span>
                        </div>
                        <div className="box_top">
                            <span className="week_day">목</span>
                        </div>
                        <div className="box_top">
                            <span className="week_day">금</span>
                        </div>
                        <div className="box_top">
                            <span className="week_day">토</span>
                        </div>
                        <div className="box_top">
                            <span className="week_day">일</span>
                        </div>
                    </div>
                    {generate()}
                </div>
            </div>
        </>
    );
};

export default Calender;