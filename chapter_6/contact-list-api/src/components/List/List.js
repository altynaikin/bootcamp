import React from 'react';
import axios from 'axios';


class List extends React.Component {
  state = {
    data: []
  }

  componentDidMount() {
    this.fetchData()
  }

  shouldComponentUpdate(nextProps, nextState) {
    if(nextProps.data !== this.props.data) {
      nextState.data = nextProps.data
      console.log(nextProps)
    }

    return nextProps.data !== this.props.data || nextState !== this.state
  }

  fetchData = async () => {
    const response = await axios.get(`http://localhost:8000/list`);

    this.setState({ data: response.data });
  }

  handleDeleteContact = async id => {
    await axios.delete(`http://localhost:8000/list/${id}`);

    this.fetchData()
  }

  render() {
    return (
      <ul className="contact-list">
        {this.state.data.map(item => (
          <li className="item-list" key={item.id}>{item.nameValue} {item.lastNameValue} <br />{item.phoneValue}
            <button className="btn-delete" onClick={() => this.handleDeleteContact(item.id)}>Delete</button>
            
              
                <button onClick={() => this.props.handleIdContact(item.id)}>Edit</button>
           
            
          </li>
        ))}
      </ul>
    )
  }

}
export default List;