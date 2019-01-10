import React, { Component } from 'react'

class QuizEnd extends Component {
    handResetClick() {
        this.props.resetClickHandler()
    }
    render() {
        return (
            <div>
                <p>Thanks for playing!</p>
                <a href='' onClick={this.handResetClick.bind(this)}>Reset Quiz</a>
            </div>
        )
    }
}

export default QuizEnd