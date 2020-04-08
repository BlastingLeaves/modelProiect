import React from "react"
import Artist from '../../../assets/img/Artist.png'
import Editor from '../../../assets/img/EDITOR.png'
import Studio from '../../../assets/img/Studio.png'
import Carousel from "react-material-ui-carousel"
import book from '../../../assets/img/book.png'
import './styles.scss'


const CarouselType1 = () =>
    <div className='containerTop '>
            <div className='textTop text-center px-5 py-4 text-secondaryLight bg-primary '>
                <h1 className='titleTop pb-6 pt-2'>DESPRE NOI</h1>

                <h5 className='miniTextTop'>It is a long established fact that a reader will be distracted by the
                    readable content of a page when looking at its layout.
                    The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                    as opposed to using 'Content here, content here', making it look like readable English.
                    Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model
                    text,
                    and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</h5>
                <img src={book} alt='logo' className='bookLogo2 absolute'/>
            </div>

            <Carousel autoplay>
                <div className='carusel-slide'>
                    <img src={Artist} alt='Slide1'/>
                </div>
                <div className='carusel-slide'>
                    <img src={Editor} alt='Slide1'/>
                </div>
                <div className='carusel-slide'>
                    <img src={Studio} alt='Slide1'/>
                </div>
            </Carousel>
        </div>

export default CarouselType1