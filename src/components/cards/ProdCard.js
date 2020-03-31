import React from "react"
import './styles.scss'
import BW1 from './../../assets/img/BW1.png'
import BW2 from './../../assets/img/BW2.png'

const ProducerCard = () =>
    <div className='w-full lg:max-w-full lg:flex bg-primary items-center pb-16'>

        <div>
            <h1 className='textProd text-secondaryLight center' data-aos='fade'>PRODUCATORI</h1>
        </div>

        <div className='containerProd inline flex justify-center center'
             >
                <div className='text1 text-center px-5 py-2 sm:py-5 text-secondaryLight bg-primary'
                     data-aos='fade-right'>
                    <h1 className='titleProd pb-2 sm:pb-3'>Lorems</h1>

                    <h5 className='miniTextProd'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                        The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                        as opposed to using 'Content here, content here', making it look like readable English.
                        </h5>
                </div>

                <div>
                    <img src={BW1} className='pic1 relative flex' data-aos='fade-left' alt='pic1'/>
                </div>
        </div>

        <div className='containerProd inline flex justify-center center'>
            <div>
                <img src={BW2} className='pic2 relative flex ' data-aos='fade-right' alt='pic2'/>
            </div>

            <div className='text1 text-center px-5 py-2 sm:py-5 text-secondaryLight bg-primary'
            data-aos='fade-left'>
                <h1 className='titleProd pb-2 sm:pb-3'>Lorems</h1>

                <h5 className='miniTextProd'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                    The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                    as opposed to using 'Content here, content here', making it look like readable English.
                   </h5>
            </div>

        </div>
    </div>


export default ProducerCard