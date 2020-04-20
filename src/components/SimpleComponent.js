import React, { Component } from 'react';

export default class SimpleComponent extends Component {
    constructor() {
        super()
        this.state = {
            mood: "happy"
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        let toggleMood = this.state.mood === "happy" ? 'sad' : 'happy'
        this.setState({
            mood: toggleMood
        })
    }

    render() {
        return (
            <div onClick={this.handleClick}>
                <h1>{this.state.mood}</h1>
            </div>
        )
    }
}
