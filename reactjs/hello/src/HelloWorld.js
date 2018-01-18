import React, { Component } from 'react'
import StateInput from './StateInput'

class HelloWorld extends Component {
    constructor(props){
        super(props)

        console.log(props, this.props)

        this.state = {
            name: 'Agnaldo Marinho',
            txt: this.props.txt
        }
    }
    render() {
        const style = {
            color: '#ff0000',
            fontSize: 50,
            backgroundColor: '#000000'
        }
        return (
            <div classeName="my-class-from-react">
                <StateInput />
                <h1 style={style}>{ this.props.txt}</h1>
                <spam>{this.state.name}</spam>
            </div>
        )
    }
}

export default HelloWorld
