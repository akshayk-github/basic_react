import React, { Component } from 'react';

class Time extends Component {

    constructor(props) {
        super(props);
        this.state = {
            time: new Date()  // 1. Constructor set initial value
        }
    }

    tick = () => {
        this.setState({
            time:new Date()
        })
    }
    
    componentDidMount = () => {
        //3. use this method for request data to server
        this.timeId = setInterval(() => this.tick(),1000)
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevState.time !== this.state.time) {
            // 4. call componentDidUpdate when previos state and current state is not same.
            console.log("hello I'm Changed")
        }
    }

    componentWillUnmount = () => {
        // 5. componentWillUnmount used to release resourse from components
        clearInterval(this.timeId);
    }

    render() {
        return (
            <div>
                {
                    this.state.time.toLocaleTimeString()
                }
            </div>
        );
    }
}

export default Time;