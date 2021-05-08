import React, { Component } from 'react'

import s from './AboutUs.module.css'

import Title from '../Title/Title.js'

export default class AboutUs extends Component {
    render() {
        return (
            <section id='AboutUs'>
                <div className='container'>
                    <Title/>
                </div>
            </section>
        )
    }
}
