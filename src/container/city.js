import React, { Component } from 'react';

class City extends Component {

    constructor(props) {
        super(props);
        this.state = {
            City: 'Surat'
        };
    }

    changecity = () => {
        this.setState({
            City: 'Lucknow'
        })
    }

    render() {
        return (
            <>
                <div>
                    City:{this.state.City}
                </div>
                <button onClick={ () => this.changecity ()}>Change</button>
            </>
        );
    }
}

export default City;