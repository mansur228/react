import React, { Component } from 'react'

import s from './Title.module.css'

import TitleA from './TitleA/TitleA.js'
import TitleB from './TitleB/TitleB.js'

export default class Title extends Component {
    render() {
        if(this.props.textA == undefined && this.props.textB == undefined){
            return(
                <div className={s.Title}>
                    <TitleA text='Заголовок'/>
                    <TitleB text='Под заголовок'/>
                </div>
            )
        }
        if(this.props.textB == undefined){
            return(
                <div className={s.Title}>
                    <TitleA text={this.props.textA}/>
                </div>   
            )
        } else if(this.props.textA == undefined){
            return(
                <div className={s.Title}>
                    <TitleB text={this.props.textB}/>
                </div>   
            )
        } else {
            return(
                <div className={s.Title}>
                    <TitleA text={this.props.textA}/>
                    <TitleB text={this.props.textB}/>
                </div>   
            )
        }
    }
}
