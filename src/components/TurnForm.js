import { useState, useEffect } from 'react'

export const TurnForm = ({ onNewTurn }) => {
  // const [formTurns, setFormTurns] = useState()
  // const [requester, setRequester] = useState('anonymous')
  const [request, setRequest] = useState('just talk')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 5000)
  }, [])

  let requesterText = 'anonymous'
  // let requestText = 'just talk'

  const handleRequesterChange = (event) => {
    // setRequester(event.target.value)
    requesterText = event.target.value
  }

  const handleRequestChange = (event) => {
    setRequest(event.target.value)
    // requestText = event.target.value
  }

  const handleNewTurn = () => {
    onNewTurn(requesterText, request)
  }

  console.log('TurnForm render')

  return (
    <>
      {isLoading
        ? (<p>Loading...</p>)
        : (
          <>
            <h1>Enter the data of the new turn</h1>
            <input
              type='text'
              onChange={handleRequesterChange}
            />
            <input
              value={request}
              type='text'
              onChange={handleRequestChange}
            />
            <button onClick={handleNewTurn}>Add Turn</button>
          </>
          )}
    </>
  )
}
