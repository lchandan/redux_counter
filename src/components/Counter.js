import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import store from '../redux/store';


import {setIncrement, setDecrement  } from '../redux/increment/increment.actions';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.incrementAsync = this.incrementAsync.bind(this);
    this.incrementIfOdd = this.incrementIfOdd.bind(this);
    this.onIncrement1 = this.onIncrement1.bind(this);
    this.onDecrement1 = this.onDecrement1.bind(this);
  }

  incrementIfOdd() {
    console.log("inside incrementIfOdd - Counter: ", this.props.value);
    if (this.props.value % 2 !== 0) {
      this.onIncrement1()
    }
  }

  incrementAsync() {
    setTimeout(this.onIncrement1, 1000)
  }

  onIncrement1(){
    //console.log("inside onIncrement - Counter: ", this.props.value);
    store.dispatch(setIncrement(this.props.value))
  }
  
  onDecrement1(){
    //console.log("inside onIncrement - Counter: ", this.props.value);
    store.dispatch(setDecrement(this.props.value))
  }
  render() {
    console.log("this.props in Counter JS", this.props)
    const { value } = this.props
    
    return (
      <p>
        Clicked: {value} times
        {' '}
        <button onClick={this.onIncrement1}>
          +
        </button>
        {' '}
        <button onClick={this.onDecrement1}>
          -
        </button>
        {' '}
        <button onClick={this.incrementIfOdd}>
          Increment if odd
        </button>
        {' '}
        <button onClick={this.incrementAsync}>
          Increment async
        </button>
      </p>
    )
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
 // onIncrement: PropTypes.func.isRequired,
  // onDecrement: PropTypes.func.isRequired
}


// const mapDispatchToProps = dispatch => ({
//  // setCurrentUser: user => dispatch(setCurrentUser(user))
// });

const mapStateToProps = state => (
  console.log('in mapStateToProps', state),
  {
  value: state.increment.value
});

export default connect(
  mapStateToProps,
  null
)(Counter);
