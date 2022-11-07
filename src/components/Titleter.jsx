export const Titleter = (props) => {
  return (
    <>
      <h1>TITLES</h1>
      {props.children}
      {props.children.map(child => (<h2 key='1'>{child}</h2>))}
    </>
  )
}
