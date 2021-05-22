import React, { Component } from 'react'

import s from './Social.module.css'

export default class Social extends Component {
    render() {
        return(
            <div className={s.socialIconContainer}>
                <i className={this.props.icon}></i>
            </div>
        )
    }
}
