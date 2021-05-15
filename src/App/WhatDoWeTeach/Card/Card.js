import React, { Component } from 'react'

import s from './Card.module.css'

export default class Card extends Component {
    render() {
        let CardBGI ={
            backgroundImage: 'url('+ this.props.imgSrc +')',
        }
        let CardBGC ={
            backgroundColor: this.props.BGcolor
        }
        return (
            <div className={s.Card} style={CardBGC}>
                <div className={s.CardBGI} style={CardBGI}></div>
                <div className={s.CardContent}>

                </div>
            </div>
        )
    }
}
