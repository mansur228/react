import React, { Component } from 'react'

import s from './PertnerIcon.module.css'

export default class PertnerIcon extends Component {
    render() {
        return (
            <div className={s.PertnerIcon}>
                <img src={this.props.srcIMG}/>
            </div>
        )
    }
}
