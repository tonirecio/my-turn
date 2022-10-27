// import logo from './logo.svg'
import { useState } from 'react'
import './App.css'
import { Turn } from './components/Turn.js'

const App = ({ initialTurns = [] }) => {
  const [turns, setTurns] = useState(initialTurns)

  if (typeof (turns) === 'undefined' || turns.length === 0) {
    return (<p>No turns</p>)
  } else {
    return (
      <div>
        <h1>Turns</h1>
        <ol>
          {turns.map((turn) => (
            <Turn
              key={turn.id}
              id={turn.id}
              requester={turn.requester}
              request={turn.request}
              isUrgent={turn.isUrgent}
            />
          )
          )}
        </ol>
      </div>
    )
  }
}

export default App
