import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Ga from './Ga'
import registerServiceWorker from './registerServiceWorker'

const gaInfo = {
  title: 'GA Overflow',
  description: 'All about GA'
}

ReactDOM.render(<Ga info={gaInfo} />, document.getElementById('root'))
registerServiceWorker()
