// import logo from './logo.svg'
// import { useState } from 'react'
import './App.css'
import { Turn as Pepe } from './Turn'
import { TurnForm } from './TurnForm'
import { Counter } from './Counter'

const App = ({ turns }) => {
  return (
    <div>
      <h1>Hello My-Turn</h1>
      <Counter />
      {turns.length === 0
        ? (<p>NO TURNS REQUESTED</p>)
        : (
          <div>
            <ul>{turns.map(element => (
              <Pepe
                key={element.id}
                id={element.id}
                requester={element.requester}
                request={element.request}
                isUrgent={element.isUrgent}
              />
            ))}
            </ul>
            <TurnForm turns={turns} />
          </div>
          )}
    </div>
  )
}

export default App
