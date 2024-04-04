import React from 'react'
import { BUY_CAKE } from './cakeTypes'

// React Redux - Actions - https://www.youtube.com/watch?v=g5l8xu6i4XQ
// React Redux - Action payload - https://www.youtube.com/watch?v=B-jNaEx1Xfc


export const buyCake = (number = 1) => {
    return {
        type: BUY_CAKE,
        payload: number
    }
}