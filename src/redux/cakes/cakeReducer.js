import { BUY_CAKE } from "./cakeTypes";

// React Redux - Reducers - https://www.youtube.com/watch?v=dm_2AANfdfA
// React Redux - Action payload - https://www.youtube.com/watch?v=B-jNaEx1Xfc


const initialState = {
    numOfCakes: 10
}

const cakeReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - action.payload
        }
        default: return state
    }
}

export default cakeReducer