import React, {Component} from 'react'

class Counter extends Component {
  constructor (props) {
    super()

    // only time you can initialize state with = sign
    this.state = {
      number: props.num,
      name: 'Typed your name',
      namesArr: []
    }

    // console.log('at constructor', this)
  }

  increaseCounter (e) {
    // console.log('at increaseCounter', this)
    this.setState({
      number: this.state.number + 1
    })
  }

  showName (e) {
    // console.log(e.target.value)
    if (e.target.value) {
      let typedName = e.target.value

      this.setState((prevState) => {
        console.log('prev state', prevState)
        console.log('name', typedName)
        return {
          name: typedName
        }
      })
    } else {
      this.setState({ name: 'Typed your name' })
    }
  }

  updateList (e) {
    this.setState({
      namesArr: this.state.namesArr.concat(this.state.name)
    })
  }

  render () {
    let allNames = this.state.namesArr.map((name, index) => {
      return <li key={index}>{name}</li>
    })

    return (
      <div>
        <h1>
          {/* {{}}
            <%%>
            <%%>
            - -
          */}
          Counter: {this.state.number}
        </h1>
        <h2>{this.state.name}</h2>
        <div>
          <label>
            Type your name:
            <input type='text' onChange={(e) => this.showName(e)} />
          </label>
        </div>
        <button
          onClick={(e) => this.increaseCounter(e)}>
          boom!
        </button>
        <button onClick={(e) => this.updateList(e)}>
          New
        </button>

        <h2>Arya's kill list</h2>
        <ul>
          {allNames}
        </ul>
      </div>
    )
  }
}

export default Counter
