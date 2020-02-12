import React, { useState } from 'react';
import './App.css';
import { MdApps, MdFormatListBulleted, MdTimer } from 'react-icons/md'
import Scheduler from './views/Scheduler'
import TaskList from './views/TaskList'
import moment from 'moment'
import Circle from 'react-circle';

function App() {

  const [isCalenderDivVisible, toggleCalenderDiv] = useState(false)
  const [list, setList] = useState([
    { id: 1, name: 'Branding Research', date: '', time: "00.50", type: "important" },
    { id: 2, name: 'Email Template Design', date: '', time: "00.00", type: "important" },
    { id: 3, name: 'Artwork Poster', date: '', time: "00.20", type: "mid" },
    { id: 4, name: 'Design Homepage', date: '', time: "00.10", type: "mid" },
    { id: 5, name: 'Photoshop Prep', date: '', time: "00.01", type: "normal" },
    { id: 6, name: 'Design Work', date: '', time: "00.01", type: "normal" },
    { id: 7, name: 'Design Dashboard', date: '', time: "00.10", type: "mid" },
    { id: 8, name: 'Development Work', date: '', time: "00.00", type: "normal" }])
  const [item, setItem] = useState(list[0])

  const [isListDivVisible, toggleListDiv] = useState(false)

  const [date, setDate] = useState(new Date())
  const handleSelectTask = (item) => {
    setItem(item)
    toggleListDiv(!isListDivVisible)
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
  const showDesc = () => {

  }
  let dateValue = ''
  if (item.date !== '') {
    dateValue = moment(item.date).format("DD/MM/YYYY")

  }
  return (
    <div className="App">
      <div className="container">
        <div className="item">

          <MdApps className="appsIcon" size="34" />
          <label className="text">Mike</label>
          <MdFormatListBulleted className="listIcon" size="34" onClick={toggleList} />
        </div>
        <div className="item" >
          <input type="text" value={item.name} placeholder="Type Task Name" onFocus={handleSelectTask} />

        </div>
        <div className="item" style={{ justifyContent: "space-evenly", }} >
          {/* <Timer time={item.time || ""} /> */}
          <Circle

            animate={true} // Boolean: Animated/Static progress
            animationDuration="1s" // String: Length of animation
            responsive={false} // Boolean: Make SVG adapt to parent size
            size="250" // String: Defines the size of the circle.
            lineWidth="2" // String: Defines the thickness of the circle's stroke.
            progress={item.time ? parseInt(item.time.split(".")[1]) / 60 * 100 : 0} // String: Update to change the progress and percentage.
            progressColor="red" // String: Color of "progress" portion of circle.
            bgColor="#ecedf0" // String: Color of "empty" portion of circle.
            textColor="#6b778c" // String: Color of percentage text color.
            textStyle={{
              font: 'bold 4rem Helvetica, Arial, sans-serif' // CSSProperties: Custom styling for percentage.
            }}
            percentSpacing={10} // Number: Adjust spacing of "%" symbol and number.
            roundedStroke={false} // Boolean: Rounded/Flat line ends
            showPercentage={false} // Boolean: Show/hide percentage.
            showPercentageSymbol={false} // Boolean: Show/hide only the "%" symbol.

          />
          <text style={{ marginTop: "90px", left: "-180px", position: "relative" }}>
            <span style={{ fontSize: "20px" }}>{item.time}</span><br />
            < MdTimer size="24" color="red" onClick={openAddTime} /></text>

        </div>
        <div className="item" >
          <input type="text" className="inputWithIcon" value={dateValue} placeholder="Add time" onChange={openAddTime} onFocus={openAddTime} />
          < MdTimer className="listIcon labelIcon" size="24" color="red" onClick={openAddTime} />

        </div>
        <div className="modalContainer">
          <div>
            {isCalenderDivVisible ?
              <Scheduler
                list={list}
                setList={setList}
                item={item}
                closeAddTime={closeAddTime}
                date={date}
              /> : null}

            {isListDivVisible ?
              < div className="modalContainer ">
                <TaskList
                  toggleList={toggleList}
                  list={list}
                  handleSelectTask={handleSelectTask}
                /></div> : null}
          </div>
        </div>


      </div>



    </div >
  );
}

export default App;
