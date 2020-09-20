import React from 'react';
import {buyPotato} from '../redux';
import {connect} from 'react-redux';


function PotatoContainer(props) {
    return (
        <div>
            <h2>Number of Potatoes: {props.numOfPotatoes}</h2>
            <button onClick={props.buyPotato}>Buy Potato</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfPotatoes: state.potato.numOfPotatoes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyPotato: () => dispatch(buyPotato())
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(PotatoContainer);