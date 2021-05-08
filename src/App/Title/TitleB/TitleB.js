import React, { Component } from 'react'

import s from './TitleB.module.css'

export default class TitleB extends Component {
    render() {
        return (
            <p className={s.TitleB}>
                {
                    this.props.text
                }
            </p>
        )
    }
}
