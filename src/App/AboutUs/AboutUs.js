import s from './AboutUs.module.css'

import React, { Component } from 'react'

export default class AboutUs extends Component {
    render() {
        return (
            <section id={s.AboutUs}>
                <div className='container'>
                    <h1 className='title'>Кто мы и зачем это делаем</h1>
                    <p className='subTitle'>Мы - команда новаторов, решающие проблему потребительского отношения к современным технологиям со стороны детей. Изучая программирование, ребенок учится логически мыслить, находить наилучшее решение поставленной задачи, развивает память и внимательность, абстрактное и визуальное мышление. К тому же IT индустрия - одна из самых быстро развивающихся и высокооплачиваемых областей трудовой деятельности на данный момент.</p>
                    <div className={s.imgContainer}>
                        <img src='https://web.archive.org/web/20201022082843im_/https://pokolenie.kg/img/12.png' alt='img'/>
                    </div>
                </div>
            </section>
        )
    }
}
