import React from 'react';
import Calendar from 'react-calendar'
import { FaCalendarAlt } from 'react-icons/fa';

function Scheduler(props) {
    const list = props.list
    const setList = props.setList
    const item = props.item
    const closeAddTime = props.closeAddTime
    const date = props.date

    const changeSelectedDate = (date) => {
        if (item.name) {
            const ele = list.filter(ele => { return item.name === ele.name })
            const rest = list.filter(ele => { return item.name !== ele.name })
            ele[0].date = date
            setList([...rest, ele[0]])

        }

    }
    const changeTime = (time) => {
        if (item.name) {
            const ele = list.filter(ele => { return item.name === ele.name })
            const rest = list.filter(ele => { return item.name !== ele.name })
            ele[0].time = time
            setList([...rest, ele[0]])
        }

    }
    return (

        <div className="container">
            <div className="item" >
                <input type="text" className="inputWithIcon" placeholder="00:00" value={item.time} onChange={(e) => changeTime(e.target.value)} />
                <FaCalendarAlt className="listIcon calenderIcon" size="24" />
            </div>
            <div className="item" >
                <Calendar
                    className="calender"
                    onChange={changeSelectedDate}
                    value={date}
                />
            </div>
            <div className="item" >
                <div className="item"><button className="button green" onClick={closeAddTime}>Set Date</button>

                    <button className="button red" onClick={closeAddTime}>x</button></div>
            </div>
        </div>
    );
}

export default Scheduler;