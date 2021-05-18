import React, { Component } from 'react'

import s from './TaskIcon.module.css'

export default class TaskIcon extends Component {
    render() {
        return (
            <div className={s.Icon}>
                <i className={this.props.icon}></i>
                <p>{this.props.text}</p>
            </div>
        )
    }
}
