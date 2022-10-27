// export const Turn = (props) => {
export const Turn = ({ id, requester, request, isUrgent = false }) => {
  // const { id, requester, request, isUrgent } = props
  return (
    <li>
      <p>{id}</p>
      <p>{requester}</p>
      <p>{request}</p>
      <p>{isUrgent ? 'URGENTE' : ''}</p>
    </li>
  )
}

// export default Turn
