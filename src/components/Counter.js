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
    //const { value, setIncrement, setDecrement } = this.props
   // console.log("inside incrementIfOdd - Counter -->: ", value);
    if (this.props.value % 2 !== 0) {
      //this.onIncrement1()
      this.props.setIncrement1(this.props.value)
    }
  }

  incrementAsync() {
    setTimeout(this.props.setIncrement1(this.props.value), 1000)
  }

  onIncrement1(){
    //console.log("inside onIncrement - Counter: ", this.props.value);
   // store.dispatch(setIncrement(this.props.value))
   setIncrement(this.props.value)
  }
  
  onDecrement1(){
    //console.log("inside onIncrement - Counter: ", this.props.value);
    store.dispatch(setDecrement(this.props.value))
  }
  render() {
    console.log("this.props in Counter JS Render", this.props)
    const { value, setIncrement1, setDecrement } = this.props
    console.log("value in Counter JS Render", value)
    return (
      <p>
        Clicked: {value} times
        {' '}
        <button onClick={() => setIncrement1(value)}>
          +
        </button>
        {' '}
        <button onClick={() => setDecrement(value)}>
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
}

 const mapDispatchToProps = dispatch => ({
  // setCurrentUser: user => dispatch(setCurrentUser(user))
  setIncrement1: value => dispatch(setIncrement(value)),
  setDecrement: value => dispatch(setDecrement(value)),  
 });

const mapStateToProps = state => (
  console.log('in mapStateToProps', state),
  {
    value: state.increment.value
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
