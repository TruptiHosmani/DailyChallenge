import React, { useState } from "react";
import ReactDOM from "react-dom";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { MdReplay, MdPlayArrow, MdTimer } from 'react-icons/md'

import "./App.css";


function Timer(props) {
    const renderTime = value => {
        if (value === 0) {
            return <div className="timer">< MdTimer className="text" size="34" color="red" /></div>;
        }
        return (
            <div className="timer">
                {props.time && value === (props.time * 60) ? < MdPlayArrow size="34" className="text" onClick={handleStartTimer} /> : null}

                <div className="text">{props.time.split(".").join(":")}</div>
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
    const [isPlaying, startTimer] = useState(false)

    return (
        <>

            <div className="timer" >

                <CountdownCircleTimer
                    isPlaying={isPlaying}
                    size={250}
                    strokeWidth={3}
                    durationSeconds={props.time ? parseFloat(props.time * 100) : 0}
                    colors={[["#333847", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
                    renderTime={renderTime}
                //onComplete={() => [true, 1000]}
                />

            </div>
        </>

    );
}

export default Timer