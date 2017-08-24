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
      enemiesArr: []
    }

    // console.log('at constructor', this)
  }

  // increaseCounter (e) {
  //   // console.log('at increaseCounter', this)
  //   this.setState({
  //     number: this.state.number + 1
  //   })
  // }
  //
  // showName (e) {
  //   // console.log(e.target.value)
  //   if (e.target.value) {
  //     let typedName = e.target.value
  //
  //     this.setState((prevState) => {
  //       return {
  //         keyword: typedName
  //       }
  //     })
  //   } else {
  //     this.setState({ keyword: 'Search keyword:' })
  //   }
  // }
  //
  // updateList (e) {
  //   this.setState({
  //     namesArr: this.state.namesArr.concat(this.state.name)
  //   })
  // }

  filterName (e) {
    let keyword = e.target.value

    const results = this.state.enemiesArr.filter((name) => {
      return name.toLowerCase().includes(keyword.toLowerCase())
      // 'the hound'.includes('t')
    })

    this.setState({
      enemiesArr: results
    })
  }

  render () {
    let allEnemies = this.state.enemiesArr.map((name, index) => {
      return <Enemy key={index} name={name} />
    })

    return (
      <div>
        <label>
          Search
          <input type='text' onChange={(e) => this.filterName(e)} />
        </label>

        {/* <DisplayedCounter number={this.state.number} />

          <button
          onClick={(e) => this.increaseCounter(e)}>
          +1
        </button> */}

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

  // only run api here, on initial rendering
  componentDidMount () {
    const url = 'https://api.got.show/api/characters'

    fetch(url)
      .then((response) => { // promise is resolved, and response is received
        // console.log('response', response)
        return response.json() // convert response.body into json format
      })
      .then((data) => {
        // console.log('data', data) // reads the json
        data.map((character, index) => {
          if (index < 101) {
            console.log(character.name)
            this.setState({
              enemiesArr: this.state.enemiesArr.concat(character.name)
            })
          }
        })
      })
      .catch((err) => {
        console.log('err', err) // just in case if api call fails
      })
  }
}

export default Counter
