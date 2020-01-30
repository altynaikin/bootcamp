import React from 'react';

import ListModal from './ListModal'
import './List.css'

class List extends React.Component {

    state={
        modalContent: false,
        currentModalIndex: false,
    }

    

    openModal(e, info, index){
        this.setState({
            modalContent: info,
            currentModalIndex: index,
        })

    }

    render() {
        const data = this.props.data;
        const _List = this;
        const closeModal = ()=>{
            _List.setState({modalContent:false})
        }

        return (
            <div className="listname">
            <ul className="contact-list">
                {data.map((item, index) => (
                    <li className="item-list"
                        onClick={(e)=>{this.openModal(e, item, index)}}
                        key = {index}>
                            {item.nameValue}      {item.lastNameValue}
                            <br/>
                            {item.phoneValue}
                            <button 
                                className="btn-delete" 
                                onClick={(e) => {
                                    this.props.onDelete(index)
                                    e.stopPropagation();
                                }}
                            ></button>
                    </li>
                ))}
                {this.state.modalContent ? 
                    <ListModal 
                    editContact = {(obj)=>{this.props.editContact(obj, this.state.currentModalIndex)}}
                    closeModal = {closeModal}
                    info = {this.state.modalContent}
                    /> : null

                }
            </ul>
            </div>
        )
    }
}


export default List