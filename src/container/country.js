import React, { Component } from 'react';

class Country extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Country: 'India'
        }
    }

    changecountry = () => {
        this.setState({
            Country: 'Russia'
        })
    }

    render() {
        return (
            <>
                <div>
                    Country:{this.state.Country}
                </div>
                <button onClick={ ()=> this.changecountry()}>Change</button>
            </>
        );
    }
}

export default Country;