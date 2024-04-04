import React, { useState } from 'react'
import { buyCake } from '../redux'
import { connect } from 'react-redux'

// React Redux - React Redux Setup - https://www.youtube.com/watch?v=0bVP5cYhMuU
// React Redux - connect - https://www.youtube.com/watch?v=gFZiQnM3Is4
// React Redux - Cakes and Ice Creams - https://www.youtube.com/watch?v=fY-Wq0k_9P4
// React Redux - Action payload - https://www.youtube.com/watch?v=B-jNaEx1Xfc


function NewCakeContainer(props) {
    const [number,setNumber]=useState(1)
  return (
    <div>
      <h2>Below Process by React Redux in NewCakeContainer.js</h2>
      <h3>Number of Cakes - {props.numOfCakes}</h3>
      <input type='text' value={number} onChange={e=>setNumber(e.target.value)}/>
      <button onClick={()=>props.buyCake(number)}>Buy {number} Cake</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    numOfCakes: state.cake.numOfCakes
  }
}
const mapDispatchToProps = dispatch => {
  return {
    buyCake: number => dispatch(buyCake(number))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewCakeContainer)