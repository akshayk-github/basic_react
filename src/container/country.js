import React, { Component } from 'react';

class Country extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Country: 'India',
            King: 'Narendra Modi'
        }
    }

    changecountry = () => {
        this.setState({
            Country: 'Russia',
            King: 'Vladimir Putin'
        })
    }

    render() {
        return (
            <>
                <div>
                    Country:{this.state.Country}
                    <br/><br/>
                    King:{this.state.King}
                </div>
                <br/>
                <button onClick={ ()=> this.changecountry()}>Change</button>
            </>
        );
    }
}

export default Country;