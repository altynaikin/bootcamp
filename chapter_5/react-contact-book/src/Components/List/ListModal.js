import React from 'react';
import './ListModal.css';

class ListModal extends React.Component{
    state = {
        isInEditMode: false,
        inputName:this.props.info.nameValue,
        inputLastName:this.props.info.lastNameValue,
        inputPhone:this.props.info.phoneValue,
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

    
    // changeEditMode = () => {
    //     this.setState({ 
    //         isInEditMode: !this.state.isInEditMode
    //     })
    // }

    updateContactInfo = () => {
        let nameValue=this.state.inputName;
        let lastNameValue = this.state.inputLastName; 
        let phoneValue = this.state.inputPhone;
        const obj = { nameValue, lastNameValue, phoneValue };
        this.props.editContact(obj);
        this.props.closeModal();
    }
    
    

    render(){
        const contact = this.props.info;
        const closeModal = this.props.closeModal
        return (
            <div className="modal-bck">
                <div className="modal-card">
                    <button className="modal-close" onClick={closeModal}></button>
                    
                    <div>
                        <input className="input__contact" 
                        onChange={this.handleInputName}
                        value={this.state.inputName}/>
                    </div>
                    <div>
                        <input className="input__contact"
                        onChange={this.handleInputLastName}
                        value={this.state.inputLastName}/>
                    </div>
                    <div>
                        <input className="input__contact"
                        onChange={this.handleInputPhone}
                        value={this.state.inputPhone}/>
                    </div>
                    <button onClick={this.updateContactInfo} className="btn save">Save</button>
                    <button onClick={closeModal} className="btn cancel">Cancel</button>
                </div>
            </div>
        )
    }
}

export default ListModal;