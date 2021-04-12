import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom';

import {Provider} from 'react-redux'
import store from './redux/store';


import Counter from './components/Counter'
//import incrementReducer from './redux/increment/increment.reducer'

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
