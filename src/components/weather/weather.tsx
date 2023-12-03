import { useEffect, useState } from "react";
import "./weather.scss";
import useWatch from "@/hooks/useWatch";
import useWeather from "@/hooks/useWeather";
import pressureIcon from "@/assets/icons/pressure-icon.svg";
import windIcon from "@/assets/icons/wind-icon.svg"
import humidityIcon from "@/assets/icons/humidity-icon.svg"

const Weather = () => {

    const { isLoading, data } = useWeather();

    const [date, setDate] = useState('')
    const [time, setTime] = useState('')


    const { subscribe, unSubscribe } = useWatch({ setDate, setTime })

    useEffect(() => {

        subscribe()

        return () => {
            unSubscribe()
        }

    }, [])


    return (
        <div className="weather-layout">
            <div className="time">
                <p>{date}</p>
                <p>{time}</p>
            </div>

            <div className="weather">
                {data &&
                    <>
                        {/* weather status icon and text */}
                        <div className="condition">
                            <img src={data.current.condition.icon} alt="" />
                            <p>{data.current.condition.text}</p>
                        </div>


                        {/* temperature and pressure */}
                        <div className="temp-and-pressure">
                            <h2>{data.current.temp_c}&deg;C</h2>

                            <div className="pressure">
                                <img src={pressureIcon} alt="" />
                                <p>{data.current.pressure_mb} mbar<br />
                                    pressure
                                </p>
                            </div>
                        </div>



                        {/* wind speed and humidity */}
                        <div className="wind-and-humidity">
                            <div className="wind">
                                <img src={windIcon} alt="" />
                                <p>{data.current.wind_kph}km/h <br />
                                    Wind
                                </p>
                            </div>

                            <div className="humidity">
                                <img src={humidityIcon} alt="" />
                                <p>{data.current.humidity}&#37; <br />
                                    Humidity
                                </p>
                            </div>
                        </div>

                    </>
                }
            </div>
        </div>
    );
}

export default Weather;