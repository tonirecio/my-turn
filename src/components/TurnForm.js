import { useState, useEffect } from 'react'

export const TurnForm = ({ turns }) => {
  const [formTurns, setFormTurns] = useState()
  const [requester, setRequester] = useState('anonymous')
  const [request, setRequest] = useState('just talk')

  useEffect(() => {
    // setFormTurns(turns)
  }, [turns])

  const handleRequesterChange = (event) => {
    setRequester(event.target.value)
  }

  const handleRequestChange = (event) => {
    setRequest(event.target.value)
  }

  const handleNewTurn = () => {
    const newTurn = {
      id: 4,
      requester,
      request,
      isUrgent: false
    }
    setFormTurns(formTurns.concat(newTurn))
    // turns.push(newTurn)
    // setTurns(turns.concat(newTurn))
    // setRequester('anonymous')
  }

  return (
    <div>
      <input
        value={requester}
        type='text' placeholder='Requester'
        onChange={handleRequesterChange}
      />
      <input
        value={request}
        type='text' placeholder='Request'
        onChange={handleRequestChange}
      />
      <button onClick={handleNewTurn}>Add Turn</button>
    </div>
  )
}
