const Header = (props) => {
  return (
    <div>
      <p> {props.course}</p>
    </div>
  )
}
const Content = (props) => {
  return (
    <div>
      <p> {props.part},{props.exercises}</p>
    </div>
  )
}
const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.total}</p>
    </div>
  )
}
const App = () => {
  const course = 'Half Stack application development'
  const jyo1 = 'Fundamentals of React'
  const exercises1 = 20
  const jyo2 = 'Java '
  const exercises2 = 10
  const jyo3 = 'Data Structures'
  const exercises3 = 17
  return (
    <div>
      <Header course={course} />
      <Content  part={jyo1} exercises={exercises1} />
      <Content part={jyo2} exercises={exercises2} /> 
      <Content part={jyo3} exercises={exercises3} /> 
      <Total total= {exercises1 + exercises2 + exercises3} />
    </div>
  )
}
export default App;