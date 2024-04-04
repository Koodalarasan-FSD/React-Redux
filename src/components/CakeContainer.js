import React from 'react'
import { buyCake } from '../redux'
import { connect } from 'react-redux'

// React Redux - React Redux Setup - https://www.youtube.com/watch?v=0bVP5cYhMuU
// React Redux - connect - https://www.youtube.com/watch?v=gFZiQnM3Is4
// React Redux - Cakes and Ice Creams - https://www.youtube.com/watch?v=fY-Wq0k_9P4


function CakeContainer(props) {
  return (
    <div>
      <h2>Number of Cakes - {props.numOfCakes}</h2>
      <button onClick={props.buyCake}>Buy Cake</button>
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
    buyCake: () => dispatch(buyCake())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CakeContainer)