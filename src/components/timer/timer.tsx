import { useState } from "react";
import TimerClock from "./timerClock";
import TimerController from "./timerController";
import "./timer.scss";

export interface ITimer {
    hours: number
    minutes: number
    seconds: number
}

const initialValue: ITimer = {
    hours: 0,
    minutes: 0,
    seconds: 0
}

const Timer = () => {
    const [timer, setTimer] = useState<ITimer>(initialValue);
    const [play, setPlay] = useState(false);
    const [isRinging, setIsRinging] = useState(false);

    const getDuration = () => {
        let total = 0;

        total = timer.hours * 60 * 60

        total += timer.minutes * 60

        total += timer.seconds

        return total
    }

    const togglePlay = () => {
        setPlay(prev => !prev)
    }

    return (
        <div className="timer-layout">

            <TimerClock getDuration={getDuration} play={play} setIsRinging={setIsRinging} setTimer={setTimer} />

            <TimerController time={timer} togglePlay={togglePlay} play={play} setTimer={setTimer} isRinging={isRinging} />
        </div>
    );
}

export default Timer;