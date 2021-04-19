import s from './WhatDoWeTeach.module.css'

import LevelItem from './LevelItem/LevelItem.js'

import React from 'react'


class WhatDoWeTeach extends React.Component {
    render() {
        return (
            <section id={s.WhatDoWeTeach}>
                <div className='container'>
                    <h1 className='title'>Чему мы обучаем</h1>
                    <div className={s.levelsDescription}>
                        <LevelItem title='Scratch' text='Визуальная среда для создания игр, мультфильмов и много другого.'/>
                        <LevelItem title='Scratch' text='Визуальная среда для создания игр, мультфильмов и много другого.'/>
                        <LevelItem title='Scratch' text='Визуальная среда для создания игр, мультфильмов и много другого.'/>
                        <LevelItem title='Scratch' text='Визуальная среда для создания игр, мультфильмов и много другого.'/>
                        <LevelItem title='Scratch' text='Визуальная среда для создания игр, мультфильмов и много другого.'/>
                        <LevelItem title='Scratch' text='Визуальная среда для создания игр, мультфильмов и много другого.'/>
                    </div>
                </div>
            </section>
        )
    }
}

export default WhatDoWeTeach