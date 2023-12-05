import { memo } from "react";
import IncreaseButton from "@/assets/icons/increase-button.svg";
import DecreaseButton from "@/assets/icons/decrease-button.svg";
import { prependZero } from "@/utilities/dateTime/prePendZero";
import "./timerButton.scss";

export type IButtonOperators = "increase" | "decrease"

export interface IButtonprops {
    title: "Hours" | "Minutes" | "Seconds"
    displayColon: boolean
    digits: number
    update: ((operator: IButtonOperators) => void)
    isRinging: boolean
}

const TimerButton: React.FC<IButtonprops> = ({ title, displayColon, digits, update, isRinging }) => {

    return (
        <div className={`timer-button-layout ${displayColon ? "colon" : ""}`}>
            <p>{title}</p>

            <div className="timer-buttons-container">
                <button disabled={isRinging} aria-label={`Increase timer by One ${title}`} onClick={() => update("increase")}>
                    <img src={IncreaseButton} alt="" />
                </button>

                <p>{prependZero(digits)}</p>

                <button disabled={isRinging} aria-label={`Decrease timer by One ${title}`} onClick={() => update("decrease")}>
                    <img src={DecreaseButton} alt="" />
                </button>
            </div>

        </div>
    );
}

export default memo(TimerButton);