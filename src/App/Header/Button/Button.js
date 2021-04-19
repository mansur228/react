import s from './Button.module.css'

import React, { Component } from 'react'

export default class Button extends Component {
    render() {
        return (
            <div className={s.Button}>
                <p>{this.props.text}</p>
            </div>
        )
    }
}
