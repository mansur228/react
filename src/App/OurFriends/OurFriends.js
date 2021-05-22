import React, { Component } from 'react'

import s from './OurFriends.module.css'

import Title from '../Title/Title.js'

import PertnerIcon from './PertnerIcon/PertnerIcon.js'

import partnerIconSRC1 from './OurFriendsIMG/p1.svg'
import partnerIconSRC2 from './OurFriendsIMG/p2.png'
import partnerIconSRC3 from './OurFriendsIMG/p3.svg'
import partnerIconSRC4 from './OurFriendsIMG/p4.svg'

export default class OurFriends extends Component {
    render() {
        return (
            <section id='OurFriends'>
                <div className='container'>
                    <Title textA='Наши друзья'/>
                    <div className={s.partnersIcon}>
                        <PertnerIcon srcIMG={partnerIconSRC1}/>
                        <PertnerIcon srcIMG={partnerIconSRC2}/>
                        <PertnerIcon srcIMG={partnerIconSRC3}/>
                        <PertnerIcon srcIMG={partnerIconSRC4}/>
                    </div>
                </div>
            </section>
        )
    }
}
