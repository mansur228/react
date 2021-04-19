import s from './LevelItem.module.css'

import React, { Component } from 'react'

export default class LevelItem extends Component {
    constructor(){
        super()

        this.state={
            deploy: 'LevelItem_deploy__1_BYR'
        }

        this.toggle = this.toggle.bind(this)
    }

    toggle(){
        if(this.state.deploy === 'LevelItem_deploy__1_BYR') {
            this.setState({deploy: ''})
        }
        if(this.state.deploy === '') {
            this.setState({deploy: 'LevelItem_deploy__1_BYR'})
        }
    }
    render() {
        return (
            <div className={s.Item}>
                <div className={s.ItemInfo}>
                    <div className={s.ItemImg}>
                        <i class="fab fa-js"></i>
                    </div>
                    <div className={s.ItemTitle}>
                        {this.props.title}
                    </div>
                    <div className={s.DownArrow}>
                        <i class="fas fa-chevron-down" onClick={this.toggle}></i>
                    </div>
                </div>
                <div className={s.text + ' ' + this.state.deploy}>
                    {this.props.text}
                </div>
            </div>
        )
    }
}
