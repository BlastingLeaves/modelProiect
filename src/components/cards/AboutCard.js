import React from "react"
import './styles.scss'


const AboutCard = () =>
    <div className='w-full lg:max-w-full lg:flex bg-primaryLight text-center justify-center pt-2'>
        <h1 className='relative font-bold text-secondaryLight pt-10 '>ROLUL NOSTRU</h1>
        <h5 className='textAbout px-10 pt-5 pb-24 text-secondaryLight'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h5>
    </div>

export default AboutCard