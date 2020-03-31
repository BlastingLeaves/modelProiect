import React from "react"
import SocialFollow from "../social-buttons";
import book from './../../assets/img/book.png'
import './styles.scss'

const Footer = () =>
    <div className='footerContainer relative bg-primaryLight'>

        {/*carte de vizita*/}
        <div className='contactContainer pb-2 rounded-md bg-secondary'>

            <div className="contact-card text-left text-secondaryLight pt-3 pl-3">
                <i className="fa fa-envelope pr-1"/>
                audio-book@gmail.com
            </div>

            <div className='contact-card text-left text-secondaryLight pt-2 pl-3'>
                <i className="fa fa-phone pr-1"/>  +4(0)762456891
            </div>

            <img src={book} alt='book' className='bookLogo absolute '/>
        </div>

        {/*butoane sociale*/}
        <div className='containerSocial justify-center center '>
            <h1 className='textContact text-secondaryLight font-bold'>Contact</h1>
                <div className='flex pt-0 sm:pt-1'>
                    <SocialFollow />
                </div>
                <div className='textRights'>
                    <h5 className=' relative center'>Copyright Reserved Audio Book @2020</h5>
                </div>
        </div>

    </div>

export default Footer