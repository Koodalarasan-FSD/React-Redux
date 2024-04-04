import React from 'react'
import { connect } from 'react-redux'
import { buyCake, buyIceCream } from '../redux'

// React Redux - mapDispatchToProps - https://www.youtube.com/watch?v=gdNitBetNWc
// React Redux - mapStateToProps - https://www.youtube.com/watch?v=prg6YzRcEvE

function ItemContainer(props) {
    return (
        <div>
            <h3>Below Process by React Redux - mapDispatchToProps,mapStateToProps in ItemContainer.js</h3>
            <h2>Item - {props.item}</h2>
            <button onClick={props.buyItem}>Buy Items</button>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    const itemState = ownProps.cake ? state.cake.numOfCakes : state.iceCream.numOfIceCreams
    return {
        item: itemState
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    const dispatchFunction = ownProps.cake ? () => dispatch(buyCake()) : () => dispatch(buyIceCream())
    return {
        buyItem: dispatchFunction
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer)