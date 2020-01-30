import React from 'react';
import './AddTodo.css'

class AddTodo extends React.Component {
    state = {
        inputVal: ''
    }

    handleInput = event => {
        const inputVal = event.target.value;
        this.setState({ inputVal })
    }

    handleClick = () => {
        const newArr = [...this.props.data];
        const value = this.state.inputVal;
        const obj = {
            value,
            status: false
        }

        if(!value) return

        newArr.push(obj)
        this.props.onChange(newArr)
        this.setState({ inputVal: '' })
    }

    render() {

        return (
        <>
            <input className="input-add-todo" 
                onChange={this.handleInput}
                value = {this.state.inputVal}
                type="text" />
            <button className="btn-add-todo" onClick={this.handleClick}>
                Add Todo</button>
        </>
        )
    }
}

export default AddTodo;