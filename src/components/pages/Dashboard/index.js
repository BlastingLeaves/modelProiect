import React from "react";
import AboutCard from "../../cards/AboutCard";
import ProducerCard from "../../cards/ProdCard";
import CarouselType1 from "../../carousels/carouselType1";





const Dashboard = () =>
    <div className='bg-primary'>
        <CarouselType1/>
        <AboutCard/>
            <ProducerCard/>
    </div>
export default Dashboard