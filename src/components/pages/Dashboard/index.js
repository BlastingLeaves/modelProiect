import React from "react";
import AboutCard from "../../cards/AboutCard";
import ProducerCard from "../../cards/ProdCard";
import CarouselType1 from "../../carousels/carousel1";
import CarouselType2 from "../../carousels/carousel2";





const Dashboard = () =>
    <div className='bg-primary'>
        <CarouselType1/>
        <AboutCard/>
            <ProducerCard/>
            <CarouselType2/>

    </div>
export default Dashboard