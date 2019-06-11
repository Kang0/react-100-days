import React, { Component } from 'react';

class CreateChallenge extends Component {

    state = {
        text: '',
        daysLeft: 100
    }

    handleOnChange = event => {
        this.setState({
            text: event.target.value
        })
    }

    handleOnSubmit = event => {
        event.preventDefault()
        this.props.addChallenge(this.state)
        this.setState({
            text: ''
        })
    }

    render () {
        return (
            <React.Fragment>
                <form onSubmit={event=>this.handleOnSubmit(event)}>
                    <input type="text" value={this.state.text} onChange={event => this.handleOnChange(event)} />
                    <input type="submit" value="Submit" />
                </form>
            </React.Fragment>
        )
    }


    

}

export default CreateChallenge