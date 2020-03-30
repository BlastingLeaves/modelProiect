import React from "react"
import SocialFollow from "../social-buttons";
import book from './../../assets/img/book.png'
import './styles.scss'

const Footer = () =>
    <div className='footerContainer relative flex bg-primaryLight center '>

        <div className='contactContainer justify-between items-center pb-2 rounded-md bg-secondary'>

            <div className="contact-card text-left text-secondaryLight pt-3 pl-3">
                <i className="fa fa-envelope pr-1"/>
                audio-book@gmail.com
            </div>

            <div className='contact-card text-left text-secondaryLight pt-2 pl-3'>
                <i className="fa fa-phone pr-1"/>  +4(0)762456891
            </div>
            <img src={book} alt='book' className='bookLogo absolute '/>
        </div>


        <div className='containerSocial justify-center center sm:inline-block '>
        <h1 className='textContact text-secondaryLight font-bold'>Contact</h1>
            <div className='flex pt-3'>
                <SocialFollow />
            </div>
            <div className='textRights'>
                <h5 className=' relative center pt-2'>Copyright Reserved Audio Book @2020</h5>
            </div>
        </div>
    </div>

export default Footer