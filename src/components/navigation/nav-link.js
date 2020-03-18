import React from 'react'
import {connect} from 'react-redux'
import {push} from 'connected-react-router'

const mdp = dispatch => ({
    push: route => {dispatch(push(route))}
})

// noinspection JSCheckFunctionSignatures
const NavLink = ({children, push, to, ...rest}) =>
    <div {...rest}>
        {React.Children.map(
            children, child => React.cloneElement(
                child,
                {onClick: () => {
                    push(to)
                    }}))}
    </div>

export default connect(null, mdp)(NavLink)