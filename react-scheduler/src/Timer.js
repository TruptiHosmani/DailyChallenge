import React, { useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { MdPlayArrow, MdTimer } from 'react-icons/md'

import "./App.css";


function Timer(props) {
    const renderTime = value => {
        if (value === 0) {
            return <div className="timer">< MdTimer className="text" size="34" color="red" /></div>;
        }
        return (
            <div className="timer">
                < MdPlayArrow size="34" className="text" onClick={handleStartTimer} />

                <div className="text">Time: {props.time.split(".").join(":")}</div>
                <div className="text">{value} Sec</div>
                <div className="text">Remaining </div>
                < MdTimer className="text" size="34" color="red" />


            </div >
        );
    };
    const handleStartTimer = () => {
        startTimer(true)
    }
    const handleReset = () => {
        startTimer(false)
        startTimer(true)
    }
    let value = 0
    const [isPlaying, startTimer] = useState(false)
    if (props.time) {
        const timeArray = props.time.split(".")
        const hr = parseInt(timeArray[0])
        const min = parseInt(timeArray[1])

        value = hr * 60 * 60 + min * 60
    }
    return (
        <>

            <div className="timer" >

                <CountdownCircleTimer
                    isPlaying={isPlaying}
                    size={250}
                    strokeWidth={3}
                    durationSeconds={props.time ? value : 0}
                    colors={[["#333847", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
                    renderTime={renderTime}
                //onComplete={() => [true, 1000]}
                />

            </div>
        </>

    );
}

export default Timer