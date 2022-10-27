import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

const turns = [
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
  }
]

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App turns={turns} />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
