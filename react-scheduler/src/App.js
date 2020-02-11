import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { MdKeyboardArrowLeft, MdApps, MdList, MdTimer } from 'react-icons/md'
import { AiOutlineClockCircle, AiOutlineCaretRight } from 'react-icons/ai'
import Calendar from 'react-calendar'
import Timer from './Timer'
import { FaCalendarAlt } from 'react-icons/fa';

function App() {
  const [item, setItem] = useState({})
  const [isCalenderDivVisible, toggleCalenderDiv] = useState(false)
  const [list, setList] = useState([
    { name: 'Branding Research', date: new Date(), time: "0.50", type: "important" },
    { name: 'Email Template Design', date: new Date(), time: "0.00", type: "important" },
    { name: 'Artwork Poster', dateTime: new Date(), time: "0.20", type: "mid" },
    { name: 'Design Homepage', dateTime: new Date(), time: "0.10", type: "mid" },
    { name: 'Photoshop Prep', dateTime: new Date(), time: "0.01", type: "normal" },
    { name: 'Design Work', dateTime: new Date(), time: "0.01", type: "normal" },
    { name: 'Design Dashboard', dateTime: new Date(), time: "0.10", type: "mid" },
    { name: 'Development Work', dateTime: new Date(), time: "0.00", type: "normal" }])

  const [isListDivVisible, toggleListDiv] = useState(false)

  const [date, setDate] = useState(new Date())
  const handleSelectTask = (item) => {
    setItem(item)
    console.log(item)
    toggleListDiv(!isListDivVisible)
  }

  const changeSelectedDate = (date) => {
    const ele = list.filter(ele => { return item.name === ele.name })
    const rest = list.filter(ele => { return item.name !== ele.name })
    ele[0].date = date
    setList([...rest, ele[0]])

  }
  const changeTime = (time) => {
    const ele = list.filter(ele => { return item.name === ele.name })
    const rest = list.filter(ele => { return item.name !== ele.name })
    ele[0].time = time
    setList([...rest, ele[0]])

  }

  const openAddTime = () => {
    toggleCalenderDiv(true)
    toggleListDiv(false)
  }
  const closeAddTime = () => {
    toggleCalenderDiv(false)
  }
  const toggleList = () => {
    toggleListDiv(!isListDivVisible)
    toggleCalenderDiv(false)
  }
  return (
    <div className="App">
      <div className="container">
        <div className="item">

          <MdApps className="appsIcon" size="34" />
          <text className="text">Mike</text>
          <MdList className="listIcon" size="34" onClick={toggleList} />
        </div>
        <div className="item" >
          <input type="text" value={item.name} placeholder="Type Task Name" onFocus={handleSelectTask} onChange={handleSelectTask} />

        </div>
        <div className="item" >
          <Timer time={item.time} />
        </div>
        <div className="item" >
          <input type="text" className="inputWithIcon" placeholder="Add time" onChange={openAddTime} onFocus={openAddTime} />
          < MdTimer className="listIcon labelIcon" size="24" color="red" onClick={openAddTime} />

        </div>
        <div className="modalContainer">
          <div>
            {isCalenderDivVisible ? <div className="container">
              <div className="item" >  <input type="text" className="inputWithIcon" placeholder="00:00" value={item.time} onChange={(e) => changeTime(e.target.value)} />
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
                <div className="item"><button className="button" onClick={closeAddTime}>Set Date</button>

                  <button className="button red" onClick={closeAddTime}>X</button></div>
              </div></div> : null}

            {isListDivVisible ?
              < div className="modalContainer ">
                <div className="container">

                  <div className="item">

                    <MdApps className="appsIcon" size="34" />
                    <text className="text">Mike</text>
                    <AiOutlineClockCircle className="listIcon" size="34" onClick={toggleList} />
                  </div>

                  <span className="spanWithHr">Todays Activity</span><hr className="hr-strike" />
                  <ul>
                    {list.filter(ele => { return ele.type === "important" }).map((item, index) => {
                      return (
                        <li className={item.type} key={index} onClick={(e) => handleSelectTask(item)}>
                          {item.name}
                          <AiOutlineCaretRight className="listIcon" />
                        </li>
                      )
                    })}
                  </ul>
                  <span className="spanWithHr">Tasks</span><hr className="hr-strike" />

                  <ul>
                    {list.filter(ele => { return ele.type !== "important" }).map((item, index) => {
                      return (
                        <li className={item.type} key={index} onClick={(e) => handleSelectTask(item)}>
                          {item.name}
                          <AiOutlineCaretRight className="listIcon" />
                        </li>
                      )
                    })}

                  </ul>
                </div>
              </div> : null}
          </div>
        </div>


      </div>



    </div >
  );
}

export default App;
