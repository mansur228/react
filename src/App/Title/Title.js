import React, { Component } from 'react'

import s from './Title.module.css'

import TitleA from './TitleA/TitleA.js'
import TitleB from './TitleB/TitleB.js'

export default class Title extends Component {
    render() {
        return (
            <div className={s.Title}>
                <TitleA text={this.props.textA}/>
                <TitleB text={this.props.textB}/>
            </div>
        )
    }
}
