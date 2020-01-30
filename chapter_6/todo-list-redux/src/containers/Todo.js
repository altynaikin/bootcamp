import React from 'react';
import {addTodo} from '../actions';
import { connect } from 'react-redux'


const Todo = ({ dispatch }) => {
  export default connect()(Todo)
  
  let input;
  
  let onClick = (e) => {
    if (input.value.trim() !== "") {
      dispatch(addTodo(input.value.trim()));
    }
    
  return(
  <div>
    <input type="text" ref={node => (input = node)} />
    <button type="submit" onClick={onClick}>
        Add Todo
      </button>
  </div>
  )
}
}
