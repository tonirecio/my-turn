// import logo from './logo.svg'
import { useState, useEffect } from 'react'
import './App.css'
import { Turn as Pepe } from './Turn'
import { TurnForm } from './TurnForm'
import { Counter } from './Counter'
import { Titleter } from './Titleter'
import { getTurns } from '../mocks/turns'

const App = ({ mockData }) => {
  const [turnsState, setTurnsState] = useState([])

  useEffect(() => {
    setTurnsState(getTurns(mockData))
  }, [])

  useEffect(() => {
    // setTurnsState(getTurns(mockData))
  }, [mockData])

  const handleNewTurn = (requester, request) => {
    const newTurn = {
      id: Math.max(...turnsState.map(element => element.id)) + 1,
      requester,
      request,
      isUrgent: false
    }
    setTurnsState([...turnsState, newTurn])
  }

  return (
    <div>
      <h1>Hello My-Turn</h1>
      <Titleter>
        <p>Hola</p>
        <p>Adiós</p>
      </Titleter>
      <Counter />
      {turnsState.length === 0
        ? (<p>NO TURNS REQUESTED</p>)
        : (
          <div>
            <ul>{turnsState.map(element => (
              <Pepe
                key={element.id}
                id={element.id}
                requester={element.requester}
                request={element.request}
                isUrgent={element.isUrgent}
              />
            ))}
            </ul>
            <TurnForm onNewTurn={handleNewTurn} />
          </div>
          )}
    </div>
  )
}

export default App
