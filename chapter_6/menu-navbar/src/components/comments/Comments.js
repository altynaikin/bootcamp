 import React from 'react';

class Comments extends React.Component {
  state = {
    comments: [],
    form: {
      name: '',
      comment: ''
    }
  }

  componentDidMount() {
    if (localStorage.getItem('state')) {
      this.setState({ ...JSON.parse(localStorage.getItem('state')) })
    }
  }

  addComment = () => {
    this.setState({
      comments: [
        ...this.state.comments,
        {id: this.state.comments.length ? this.state.comments.reduce((p, c) => p.id > c.id ? p : c).id + 1 : 1, // max id +1
          name: this.state.form.name,
          comment: this.state.form.comment,
          date: new Date().toDateString
        }],
      form: {
        name: '',
        comment: ''
      }
    }, () => localStorage.setItem('state', JSON.stringify(this.state)))
  }

  removeComment = (id) => {
    this.setState({
      comments: this.state.comments.filter(comment => comment.id !== id)
    }, () => localStorage.setItem('state', JSON.stringify(this.state)))
  }

  handleChange = (e) => {
    console.log(e.target.name)
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      }
    })
  }

  render() {
    return (
      <div className="comment">
        <div className="comment-list">
        {this.state.comments.map(comment => <div key={comment.id}>
          <span style={{ fontStyle: 'italic' }}>{comment.id}: </span>
          <strong>{comment.name}, </strong> <br />
          <span>{comment.comment}</span> <br/>
          <button className="delete-comment" onClick={this.removeComment.bind(null, comment.id)}>X</button>
        </div>)}
        </div>
        <div className="form__comment">
          <label>Имя:<br/> <input className="input__comment"
            type="text"
            value={this.state.form.name}
            name="name"
            onChange={this.handleChange} /></label><br/>
          <label>Комментарий: <textarea className="textarea__comment"
            name="comment"
            value={this.state.form.comment}
            onChange={this.handleChange}></textarea>
          </label>
          <button className="button-bottom" onClick={this.addComment}>Добавить комментарий</button>
        </div>

      </div>

    )
  }

}

 

export default Comments;
