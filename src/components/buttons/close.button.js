import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../icon'

const BtnClose = ({className, onClick}) =>
    <button onClick={onClick}
            className={className + ' outline-none focus:outline-none'}>
        <Icon type='close'
              className="fill-current"/>
    </button>

BtnClose.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func
}

export default BtnClose