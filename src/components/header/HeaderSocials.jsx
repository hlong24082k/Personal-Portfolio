import React from 'react'
import {BsLinkedin, BsGithub, BsSkype} from 'react-icons/bs';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com/in/long-lê-841b96215" target='_blank' rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/hlong24082k" target='_blank' rel="noreferrer"><BsGithub/></a>
        <a href="https://join.skype.com/invite/yP8qM51Rbokh" target='_blank' rel="noreferrer"><BsSkype/></a>
    </div>
  )
}

export default HeaderSocials