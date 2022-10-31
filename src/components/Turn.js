export const Turn = ({ id, requester, request, isUrgent = false }) => {
  return (
    <li>
      <p>{id}</p>
      <p>{requester}</p>
      <p>{request}</p>
      <p>{isUrgent ? 'URGENTE' : ''}</p>
    </li>
  )
}
