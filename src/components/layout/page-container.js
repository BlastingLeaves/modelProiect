import React from "react"

// import Footer from "../_local-lib/footer"

const PageContainer = props =>
    <div className=' fill flex bg-primary center justify-center'>
        {props.children}
        {/*<Footer/>*/}
    </div>

export default PageContainer