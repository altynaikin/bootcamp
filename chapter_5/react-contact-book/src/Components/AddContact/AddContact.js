import React from "react"
import "./AddContact.css"

class AddContact extends React.Component {
    state = {
        inputName: '',
        inputLastName: '',
        inputPhone: ''
    }

    handleInputName = event => {
        const inputName = event.target.value;
        this.setState({ inputName })
    }

    handleInputLastName = event => {
        const inputLastName = event.target.value;
        this.setState({ inputLastName })
    }

    handleInputPhone = event => {
        const inputPhone = event.target.value;
        this.setState({ inputPhone })
    }

    handleClick = () => {
        const newArr = [...this.props.data];
        const nameValue = this.state.inputName;
        const lastNameValue = this.state.inputLastName;
        const phoneValue = this.state.inputPhone;

        const obj = {
            nameValue,
            lastNameValue,
            phoneValue,
        }

        if(!nameValue || !lastNameValue || !phoneValue) return;

        newArr.push(obj)
        this.props.onChange(newArr)

        this.setState({ inputName: '' })
        this.setState({ inputLastName: '' })
        this.setState({ inputPhone: '' })
    }

    render() {
        return (
            <div className="container">
                <input 
                    className="input-name" 
                    onChange={this.handleInputName}
                    value={this.state.inputName}
                    type="text" 
                    placeholder="Name">
                    </input>
                <input
                    className="input-lastName"
                    onChange={this.handleInputLastName}
                    value={this.state.inputLastName}
                    type="text"
                    placeholder="LastName">
                    </input>
                <input 
                    className="input-phone" 
                    onChange={this.handleInputPhone}
                    value={this.state.inputPhone}
                    type="text" 
                    placeholder="Phone">
                    </input>
                <button 
                    className="btn-add-contact" onClick={this.handleClick}>
                    ADD CONTACT</button>
                </div>
        )
    }
}

export default AddContact