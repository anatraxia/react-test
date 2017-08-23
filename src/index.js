import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Ga from './Ga'
import registerServiceWorker from './registerServiceWorker'

const gaInfo = {
  title: 'GA Overflow',
  description: 'All about GA'
}

const post = {
  title: 'Dinosaurs are awesome',
  author: 'Stealthy Stegosaurus',
  body: 'Check out this body property!',
  comments: [
    {
      title: 'First!',
      user: 'Prima'
    },
    {
      title: 'Great post',
      user: 'Shimei'
    },
    {
      title: 'Hire this author now!',
      user: 'Kang Sheng'
    },
    {
      title: 'Hire this author now!',
      user: 'Kang Sheng'
    }
  ]
}

ReactDOM.render(<Ga info={gaInfo} post={post} />, document.getElementById('root'))
registerServiceWorker()
