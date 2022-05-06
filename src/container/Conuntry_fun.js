import React, { useState } from 'react';

function Conuntry_fun(props) {

    const [country, setCountry] = useState('India')
    const [king, setKing] = useState('Narendra Modi')
    const [Dushman, setDushman] = useState('Pakistan')
    const [city, setCity] = useState('Gujarat')

    const changecountry = () => {
        setCountry('Russia')
        setKing('Vladimir Putin')
        setDushman('Ukraine')
        setCity('Moscow')
    }

    return (
        <div>
            <h1>Function based Component</h1>
            <p>Country : {country}</p>
            <p>King : {king}</p>
            <p>Dushman : {Dushman}</p>
            <p>City : {city}</p>
            <button onClick={() => changecountry()}>change</button>

            {/* <p>GDP : {GDP}</p>
            <button onClick={() => setgdp(5.5)}>Change</button> */}

        </div>
    );
}

export default Conuntry_fun;