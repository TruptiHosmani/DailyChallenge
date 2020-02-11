import React, { useState } from 'react';
import { MdApps } from 'react-icons/md'
import { AiOutlineClockCircle, AiOutlineCaretRight, AiOutlineCaretDown } from 'react-icons/ai'


function TaskList(props) {
    const toggleList = props.toggleList
    const handleSelectTask = props.handleSelectTask
    const list = props.list
    const [selectedIndex, setSelectIndex] = useState('')
    const [isShowDesc, setShowDesc] = useState(false)
    return (
        <div className="container">

            <div className="item">

                <MdApps className="appsIcon" size="34" />
                <label className="text">Mike</label>
                <AiOutlineClockCircle className="listIcon" size="34" onClick={toggleList} />
            </div>

            <span className="spanWithHr">Todays Activity</span><hr className="hr-strike" />
            <ul>
                {list.filter(ele => { return ele.type === "important" }).map((item, index) => {
                    return (
                        <li className={item.type} key={index} >
                            <label onClick={(e) => handleSelectTask(item)}>{item.name}</label>
                            {isShowDesc && item.id.toString() == selectedIndex ? <AiOutlineCaretDown className="listIcon" onClick={(e) => { setShowDesc(!isShowDesc); setSelectIndex(item.id); console.log(item.id) }} /> :
                                <AiOutlineCaretRight className="listIcon" onClick={(e) => { setShowDesc(!isShowDesc); setSelectIndex(item.id); console.log(item.id) }} />}
                            <br />
                            {isShowDesc && item.id.toString() == selectedIndex ? <small>Task Description</small> : null}

                        </li>
                    )
                })}
            </ul>
            <span className="spanWithHr">Tasks</span><hr className="hr-strike" />

            <ul>
                {list.filter(ele => { return ele.type !== "important" }).map((item, index) => {
                    return (
                        <li className={item.type} key={index} >
                            <label onClick={(e) => handleSelectTask(item)}>{item.name}</label>
                            {isShowDesc && item.id.toString() == selectedIndex ? <AiOutlineCaretDown className="listIcon" onClick={(e) => { setShowDesc(!isShowDesc); setSelectIndex(item.id); console.log(item.id) }} /> :
                                <AiOutlineCaretRight className="listIcon" onClick={(e) => { setShowDesc(!isShowDesc); setSelectIndex(item.id); console.log(item.id) }} />}
                            <br />
                            {isShowDesc && item.id.toString() == selectedIndex ? <small>Task Description</small> : null}

                        </li>
                    )
                })}

            </ul>
        </div>

    );
}

export default TaskList;