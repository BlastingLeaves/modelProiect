import {createActions, handleActions} from 'redux-actions'


const initialState = {
    firstDraw: true,
    loaderState: false,
    navbarState: true
}

const NAVBAR_STATE = 'NAVBAR_STATE'
const LOADER_STATE = 'LOADER_STATE'
const DIALOG_OPEN = 'DIALOG_OPEN'
const DIALOG_CLOSE = 'DIALOG_CLOSE'

// noinspection JSUnusedGlobalSymbols
export const {
    navbarState,
    loaderState,
    dialogOpen,
    dialogClose
} = createActions({},
    NAVBAR_STATE,
    LOADER_STATE,
    DIALOG_OPEN,
    DIALOG_CLOSE
)

export default handleActions({
    [NAVBAR_STATE]:(state, {payload}) => ({
       ...state,
       navbarState:payload
    }),
    [LOADER_STATE]: (state, {payload}) => ({
        ...state,
        loaderState: payload || false
    }),
    [DIALOG_OPEN]: (state, action) => ({
        ...state,
        [action.payload]: true
    }),
    [DIALOG_CLOSE]: (state, action) => ({
        ...state,
        [action.payload]: false
    })
}, initialState)
