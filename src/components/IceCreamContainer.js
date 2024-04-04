import React from 'react'
import { buyIceCream } from '../redux'
import { connect } from 'react-redux'

// React Redux - React Redux Setup - https://www.youtube.com/watch?v=0bVP5cYhMuU
// React Redux - connect - https://www.youtube.com/watch?v=gFZiQnM3Is4
// React Redux - Cakes and Ice Creams - https://www.youtube.com/watch?v=fY-Wq0k_9P4


function IceCreamContainer(props) {
  return (
    <div>
      <h2>Below Process by React Redux in IceCreamContainer.js</h2>
      <h3>Number of icecreams - {props.numOfIceCreams}</h3>
      <button onClick={props.buyIceCream}>Buy Cake</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    numOfIceCreams: state.iceCream.numOfIceCreams
  }
}
const mapDispatchToProps = dispatch => {
  return {
    buyIceCream: () => dispatch(buyIceCream())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IceCreamContainer)