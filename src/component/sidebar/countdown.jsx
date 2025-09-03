import { Component, useState, useEffect } from "react";

const CountDown = () => {
    const [countdownDate, setCountdownDate] = useState(new Date('11/09/2022').getTime());
    const [state, setState] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        setInterval(() => setNewTime(), 1000);
    }, []);

    const setNewTime = () => {
        if (countdownDate) {
        const currentTime = new Date().getTime();

        const distanceToDate = countdownDate - currentTime;

        let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
        let hours = Math.floor(
            (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        let minutes = Math.floor(
            (distanceToDate % (1000 * 60 * 60)) / (1000 * 60),
        );
        let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);

        const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        days = `${days}`;
        if (numbersToAddZeroTo.includes(hours)) {
            hours = `0${hours}`;
        } else if (numbersToAddZeroTo.includes(minutes)) {
            minutes = `0${minutes}`;
        } else if (numbersToAddZeroTo.includes(seconds)) {
            seconds = `0${seconds}`;
        }

        setState({ days: days, hours: hours, minutes, seconds });
        }
    };

    return (
        <ul className="countdown justify-content-center">
            <li className="countdown__item">
                <h3 className="countdown__number color--theme-color countdown__number-days">{state.days || '0'}</h3>
                <p className="countdown__text">Days</p>
            </li>
            <li className="countdown__item">
                <h3 className="countdown__number color--theme-color countdown__number-hours">{state.hours || '00'}</h3>
                <p className="countdown__text">Hour</p>
            </li>
            <li className="countdown__item">
                <h3 className="countdown__number color--theme-color countdown__number-minutes">{state.minutes || '00'}</h3>
                <p className="countdown__text">Minu</p>
            </li>
            <li className="countdown__item">
                <h3 className="countdown__number color--theme-color countdown__number-seconds">{state.seconds || '00'}</h3>
                <p className="countdown__text">Seco</p>
            </li>
        </ul>
    );
};

export default CountDown;
