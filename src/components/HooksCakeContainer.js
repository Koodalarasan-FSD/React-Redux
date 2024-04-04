import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../redux'

// React Redux - useSelector Hook - https://www.youtube.com/watch?v=oKvF8jcSwIg
// React Redux - Cakes and Ice Creams - https://www.youtube.com/watch?v=fY-Wq0k_9P4


function HooksCakeContainer() {
    const numOfCakes = useSelector(state => state.cake.numOfCakes)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Below Process by React Redux-useSelector Hook in HooksCakeContainer.js</h2>
            <h3>Number of Cakes - {numOfCakes}</h3>
            <button onClick={()=>dispatch(buyCake())}>Buy Cakes</button>
        </div>
    )
}

export default HooksCakeContainer