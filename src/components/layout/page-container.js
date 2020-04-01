import React from "react"
import Navbar from "../navigation";
import Footer from "../footer";




const PageContainer = props =>
    <>
        <div className="app-header sticky top-0 z-10">
            <Navbar/>
        </div>
        <div className='app-page'>
            {props.children}
        </div>
        <footer className='app-footer'>
            <Footer/>
        </footer>


    </>
export default PageContainer