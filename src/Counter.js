import React, {Component} from 'react'

// All my fn components (comp that doesn't change state)
import DisplayedCounter from './DisplayedCounter'
import DisplayedName
 from './DisplayedName'
import Enemy from './Enemy'

class Counter extends Component {
  constructor (props) {
    super()

    // only time you can initialize state with = sign
    this.state = {
      number: props.num,
      keyword: 'Search keyword',
      enemiesArr: [
        'The Hound', 'Cersei', 'Sansa'
      ]
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
        return {
          keyword: typedName
        }
      })
    } else {
      this.setState({ keyword: 'Search keyword:' })
    }
  }

  updateList (e) {
    this.setState({
      namesArr: this.state.namesArr.concat(this.state.name)
    })
  }

  render () {
    let allEnemies = this.state.enemiesArr.map((name, index) => {
      return <Enemy key={index} name={name} />
    })

    return (
      <div>
        <DisplayedCounter number={this.state.number} />

        <button
          onClick={(e) => this.increaseCounter(e)}>
          +1
        </button>

        <h2>Arya's kill list</h2>
        <ul>
          { allEnemies }
        </ul>

        {/* <DisplayedName keyword={this.state.keyword} />

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
        </button> */}

      </div>
    )
  }
}

export default Counter
