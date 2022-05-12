import React, { useEffect, useState } from 'react';

function TimeFun(props) {

    const [Time, setTime] = useState(new Date());

    const tick = () => {
        setTime(new Date);
        console.log("hello I'm changed");
    }

    useEffect(
        () => { //componentDidMount componentDidUpdate
            const timeId = setInterval(() => tick(), 1000)

            return () => {
                // ComponmentWillUnmount
                clearInterval(timeId);
            }
        },
        [Time])

    return (
        <div>
            {Time.toLocaleTimeString()}
        </div>
    );
}

export default TimeFun;