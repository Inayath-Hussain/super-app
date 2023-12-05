import { Dispatch, SetStateAction, useCallback } from "react";
import TimerButton from "./timerButton";
import { IButtonprops, IButtonOperators } from "./timerButton";
import { ITimer } from "./timer";
import "./timerController.scss";

interface Iprops {
    time: ITimer
    setTimer: Dispatch<SetStateAction<ITimer>>
    play: boolean
    togglePlay: () => void
    isRinging: boolean
}

const TimerController: React.FC<Iprops> = ({ time, setTimer, togglePlay, play, isRinging }) => {

    const update = useCallback((key: keyof ITimer, operator: IButtonOperators) => {
        setTimer(prev => {

            switch (operator) {
                case "increase":
                    if (key === "hours") return { ...prev, hours: prev.hours + 1 }
                    else return { ...prev, [key]: prev[key] === 59 ? 0 : prev[key] + 1 }

                case "decrease":
                    if (key === "hours") return { ...prev, hours: prev.hours === 0 ? 0 : prev.hours - 1 }
                    return { ...prev, [key]: prev[key] === 0 ? 59 : prev[key] - 1 }

                default:
                    throw Error("Unidentified Operator")
            }

        })
    }, [])

    const timerButtonData: IButtonprops[] = [
        { digits: time.hours, displayColon: true, title: "Hours", update: (operator) => update("hours", operator), isRinging },
        { digits: time.minutes, displayColon: true, title: "Minutes", update: (operator) => update("minutes", operator), isRinging },
        { digits: time.seconds, displayColon: false, title: "Seconds", update: (operator) => update("seconds", operator), isRinging }
    ]

    return (
        <div className="timer-controller-layout">
            <div className="timer-buttons-section">


                {timerButtonData.map(t => (
                    <TimerButton key={t.title} digits={t.digits} displayColon={t.displayColon} title={t.title} update={t.update} isRinging={t.isRinging} />
                ))}

            </div>

            <button className="play-button" onClick={togglePlay} disabled={isRinging} >{play ? "Stop" : "Start"}</button>
        </div>
    );
}

export default TimerController;