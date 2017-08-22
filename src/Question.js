import React, {Component} from 'react'

class Question extends Component {
  render () {
    return (
      <li>
        <h2>{this.props.detail.title}</h2>
        <p>{this.props.detail.description}</p>
        <button>
          {this.props.detail.upvotes} upvotes
        </button>
        <button>
          {this.props.detail.downvotes} downvotes
        </button>
      </li>
    )
  }
}

export default Question
