import React, { Component } from 'react'

import s from './TitleA.module.css'

export default class TitleA extends Component {
    render() {
        return (
            <p className={s.TitleA}>
                {
                    this.props.text
                }
            </p>
        )
    }
}
