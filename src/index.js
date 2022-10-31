import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './components/App'

const turnsData = [
  {
    id: 1,
    requester: 'John Doe',
    request: 'I need support with React',
    isUrgent: true
  },
  {
    id: 2,
    requester: 'Jane Doe',
    request: 'I need support about my life'
  },
  {
    id: 3,
    requester: 'Pepito',
    request: 'I need support about my life'
  }
]

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <App turns={turnsData} />
)
