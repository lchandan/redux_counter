import React from 'react'
import ReactDOM from 'react-dom'

import {Provider} from 'react-redux'
import store from './redux/store';

import Counter from './components/Counter'

const Sample =()=>(
  <div><b>Chandan First Redux Component</b></div>
)

ReactDOM.render(
  <Provider store={store}>
     <Sample/>
      <Counter
        value={store.increment}
        onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
        onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
      />
  </Provider>,
  document.getElementById('root')
);
