import React from "react";
import PropTypes from 'prop-types'
import appLogo from './../../assets/img/ab_logo.png'

const AppBarLogo = ({imgSrc}) =>
    <div className="shadowLogo flex-shrink-0 bg-primaryLight">
        <img className="block lg:hidden h-8 w-auto" src={imgSrc} alt="app logo"/>
    </div>

AppBarLogo.propTypes = {
    imgSrc: PropTypes.string
}

AppBarLogo.defaultProps = {
    imgSrc: appLogo
}

export default AppBarLogo