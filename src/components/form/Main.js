import React, { Component } from 'react'
import PropTypes from 'prop-types'
import List from './List'


export default class Main extends Component {
    static propTypes = {
        value: PropTypes.string,
        onClick: PropTypes.func,
    }

    constructor(props, context) {
        super(props, context)

        this.state = {
            value: this.props.value
        }
    }

    render() {

        return (
            <div className="list-area">
                <List/>
            </div>
        )
    }
}