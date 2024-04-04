import { BUY_ICECREAM } from "./iceCreamTypes";

// React Redux - Cakes and Ice Creams - https://www.youtube.com/watch?v=fY-Wq0k_9P4

const initialState = {
    numOfIceCreams: 20
}

const iceCreamReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_ICECREAM: return {
            ...state,
            numOfIceCreams: state.numOfIceCreams - 1
        }
        default: return state
    }
}

export default iceCreamReducer