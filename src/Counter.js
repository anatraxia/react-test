import React, {Component} from 'react'

class Counter extends Component {
  constructor (props) {
    super()

    this.state = {
      number: props.num
    }
  }

  increaseCounter (e) {
    console.log('this', this)
    this.setState({ number: this.state.number + 1 })
  }

  render () {
    return (
      <div>
        <h1>Counter: {this.state.number}</h1>
        <button onClick={(e) => this.increaseCounter(e)}>boom!</button>
      </div>
    )
  }
}

export default Counter
