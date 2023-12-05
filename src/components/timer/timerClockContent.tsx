import { TimeProps } from "react-countdown-circle-timer"
import { prependZero } from "@/utilities/dateTime/prePendZero";
import "./timerClockContent.scss";

interface ITime {
    hour: string
    minutes: string
    seconds: string
}

const TimerClockContent: React.FC<TimeProps> = ({ elapsedTime, remainingTime }) => {

    const currentTime = calculateTime();

    function calculateTime(): ITime {
        const hour = Math.floor(remainingTime / (60 * 60))
        const minutes = Math.floor((remainingTime % 3600) / 60)
        const seconds = remainingTime % 60

        return { hour: prependZero(hour), minutes: prependZero(minutes), seconds: prependZero(seconds) }
    }

    const visualFormatTime = ({ hour, minutes, seconds }: ITime) => {
        return `${hour} : ${minutes} : ${seconds}`
    }

    const audioFormatTime = ({ hour, minutes, seconds }: ITime) => {
        return `${hour} Hours, ${minutes} minutes and ${seconds} seconds`
    }



    return (
        <div className="timer-content">
            <p role="timer" aria-live="assertive" aria-label={audioFormatTime(currentTime)}>{visualFormatTime(currentTime)}</p>
        </div>
    );
}

export default TimerClockContent;