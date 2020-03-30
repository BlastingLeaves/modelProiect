import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faYoutube, faFacebook, faInstagram, faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import './_styles.scss'

const SocialFollow = () => {
    return(
        <div className='social-container text-right'>

        <div className='social-container'>
            <a href='https://www.youtube.com/channel/UC-KT3MgNFC99HxVj0lA9CQQ' className='youtube social'>
                <FontAwesomeIcon icon={faYoutube} size='1x'/>
            </a>
        </div>

        <div className='social-container'>
            <a href='https://www.facebook.com/regizordepoveste/' className='facebook social'>
                <FontAwesomeIcon icon={faFacebook} size='1x'/>
             </a>
        </div>
            <div className='social-container'>
                <a href='https://www.youtube.com/channel/UC-KT3MgNFC99HxVj0lA9CQQ' className='instagram social'>
                    <FontAwesomeIcon icon={faInstagram} size='1x'/>
                </a>
            </div>
            <div className='social-container'>
                <a href='https://www.youtube.com/channel/UC-KT3MgNFC99HxVj0lA9CQQ' className='whatsapp social'>
                    <FontAwesomeIcon icon={faWhatsapp} size='1x'/>
                </a>
            </div>
        </div>
    )
}

export default SocialFollow