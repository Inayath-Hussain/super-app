import { CountdownCircleTimer } from "react-countdown-circle-timer"
import TimerClockContent from "./timerClockContent";
import { Dispatch, SetStateAction, useState } from "react";
import alarmClockSound from "@/assets/alarm-clock.mp3"
import "./timerClock.scss"
import { ITimer } from "./timer";

interface Iprops {
    getDuration: () => number
    play: boolean
    setIsRinging: Dispatch<SetStateAction<boolean>>
    setTimer: Dispatch<SetStateAction<ITimer>>
}

const TimerClock: React.FC<Iprops> = ({ getDuration, play, setIsRinging, setTimer }) => {
    const [alarmSound] = useState(new Audio(alarmClockSound))

    const onComplete = () => {
        alarmSound.onplay = () => {
            setIsRinging(true)
        }

        alarmSound.play();

        alarmSound.onended = () => {
            setTimer({ hours: 0, minutes: 0, seconds: 0 })
            setIsRinging(false)
        }
    }

    return (
        <div className="timer-clock">
            <CountdownCircleTimer
                colors={"#FF6A6A"}
                duration={getDuration()}
                size={155}
                strokeWidth={6}
                rotation="counterclockwise"
                trailColor="#191E39"
                isPlaying={play}
                onComplete={onComplete}
            >
                {TimerClockContent}
            </CountdownCircleTimer>
        </div>
    );
}

export default TimerClock;