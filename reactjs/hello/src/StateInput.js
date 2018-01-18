import React, { Component } from 'react'

class StateInput extends Component {
    constructor(props){
        super(props)

        this.state = {
            name: ''
        }

        setTimeout(() => {
            this.setState({
                name: 'Agnaldom'
            })
        }, 1000)
    }

    render() {
        console.log(this.state)
        return(
            <div>
                <input type="text" name="name" values={ this.state.name} />
            </div>
        )
    }
}

export default StateInput
