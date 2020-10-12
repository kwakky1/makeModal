import React, {useState} from 'react';
import moment from "moment";
import forward_arrow from '../img/ic-arrow-forward.svg'
import back_arrow from '../img/ic-arrow-back.svg'
import {useDispatch} from "react-redux";
import {endAction} from "../reducer/EndReducer";

const Calender = ({setStartDate, setEndDate, startDate, endDate}) => {

    const [today, setToday] = useState(moment())
    const dispatch = useDispatch()
    const [range] = useState([])
    const generate = () => {
        const date = setStartDate ? moment(startDate) : moment(endDate)
        const yesterday = moment().add(-1, "day")
        const startWeek = today.clone().startOf('month').isoWeek() >= 52 ? 0 : today.clone().startOf('month').isoWeek();
        const endWeek = today.clone().endOf('month').isoWeek() === 1 ? 53 : today.clone().endOf('month').isoWeek();
        let calendar = [];
        for (let week = startWeek; week <= endWeek; week++) {
            calendar.push(
                <div className="row" key={week}>
                    {
                        Array(7).fill(0).map((n, i) => {
                            let current = today.clone().isoWeek(week).startOf('isoWeek').add(n + i, 'day')
                            let isSelected = (startDate.format("YYYYMMDD") !== endDate.format('YYYYMMDD')) && (date.format('YYYYMMDD') === current.format('YYYYMMDD') || (current >= startDate && current <= endDate)) ? 'selected' : '';
                            let isGrayed = current.format('MM') !== today.format('MM') || yesterday > current ? 'grayed' : '';
                            const setting = () => {
                                if(range.length === 1) {
                                    range.push(current)
                                    range.sort((a,b)=>{
                                        return a-b;
                                    })
                                    setStartDate(range[0])
                                    setEndDate(range[1])
                                } else if (range.length === 2) {
                                    range.sort((a,b)=>{
                                        return a-b
                                    })
                                    if(Number(range[0].format('YYYYMMDD')) <= Number(current.format('YYYYMMDD')) && Number(range[1].format('YYYYMMDD')) >= Number(current.format('YYYYMMDD'))) {
                                        if(Math.abs(Number(range[0].format("YYYYMMDD"))-Number(current.format(("YYYYMMDD")))) >= Math.abs(Number(range[1].format("YYYYMMDD"))-Number(current.format(("YYYYMMDD"))))){
                                            range.pop()
                                            range.push(current)
                                            setStartDate(range[0])
                                            setEndDate(range[1])
                                        } else {
                                            range.shift()
                                            range.push(current)
                                            range.sort((a,b) => {
                                                return a-b
                                            })
                                            setStartDate(range[0])
                                            setEndDate(range[1])
                                        }
                                    } else {
                                        range.shift()
                                        range.shift()
                                        setStartDate(current)
                                        range.push(current)
                                        setEndDate(moment())
                                    }
                                } else if (range.length === 0) {
                                    range.push(current)
                                    setStartDate(range[0])
                                }
                                if(isGrayed) {
                                    return
                                }
                            }
                            return (
                                <div className={`box  ${isGrayed}  ${isSelected}   `} key={i} onClick={setting} aria-disabled={!isGrayed} >
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