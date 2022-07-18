import React from 'react'
import CTA from './CTA'
import './header.css'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Stephanus Yogi</h1>
        <h5 className="text-light">Web Developer</h5>
        <CTA/>
        <HeaderSocials/>

        <div className="me">
          <img src={ME} alt="Stephanus Yogi"/>
        </div>

        <a href="#contact" rel="noreferrer" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header