import React, { useState } from 'react';

function Conuntry_fun(props) {

    const [country, setCountry] = useState('India'),
    [GDP, setgdp] = useState('2')

    const changecountry = () => {
        setCountry('Russia')
    }

    return (
        <div>
            <p>Country [function based Component]: {country}</p>
            <button onClick={() => changecountry()}>change</button>

            <p>GDP : {GDP}</p>
            <button onClick={() => setgdp(5.5)}>Change</button>

        </div>
    );
}

export default Conuntry_fun;