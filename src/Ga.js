import React, {Component} from 'react'

import Question from './Question'

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
    return (
      <div>
        <h1>{this.props.info.title}</h1>
        <p>{this.props.info.description}</p>

        <ul>
          <Question detail={questions[0]} />
          <Question detail={questions[1]} />
        </ul>
      </div>
    )
  }
}

export default Ga
