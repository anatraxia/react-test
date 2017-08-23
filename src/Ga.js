import React, {Component} from 'react'

import Question from './Question'
import Comment from './Comment'

let questions = [
  {
    title: 'What is react?',
    description: 'What are thoseeeee',
    upvotes: 10,
    downvotes: 2
  },
  {
    title: 'Javascript so stupid?',
    description: 'I know rite',
    upvotes: 5,
    downvotes: 1
  }
]

class Ga extends Component {
  render () {
    let commentList = this.props.post.comments.map(function (comment, index) {
      return <Comment title={comment.title} user={comment.user} key={index} />
    })

    return (
      <div>
        <h1>{this.props.info.title}</h1>
        <p>{this.props.info.description}</p>

        <h2>Post: { this.props.post.title }</h2>
        <small>
          authored by: { this.props.post.author }
        </small>
        <p>
          { this.props.post.body }
        </p>
        <h3>Comments</h3>
        <ul>
          { commentList }
        </ul>

        {/* <ul>
          <Question detail={questions[0]} />
          <Question detail={questions[1]} />
        </ul> */}
      </div>
    )
  }
}

export default Ga
