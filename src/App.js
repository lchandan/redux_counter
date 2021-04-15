import React from 'react';
//import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

import { setIncrement, setDecrement } from './redux/increment/increment.actions';
import Counter from './components/Counter'

const Sample =()=>(
  <div><b>Chandan First Redux Component</b></div>
)

class App extends React.Component {
  
  render() {
    return (
      <div>
        <Sample />
        <Counter
          //value={value}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => (
  {
    setIncrement: value => dispatch(setIncrement(value+1)),
    setDecrement: value => dispatch(setDecrement(value-1))
   
});

export default connect(
  null,
  mapDispatchToProps
)(App);
