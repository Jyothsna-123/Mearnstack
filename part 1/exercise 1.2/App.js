const course = 'Half Stack application development'
const jyo1 = 'Fundamentals of React'
const exercises1 = 3
const jyo2 = 'Java'
const exercises2 = 7
const jyo3 = 'Data Strectures'
const exercises3 = 45
const Header = (props) => {
  return (
    <div>
      <p> {props.course}</p>
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
  const Part = (props) => {
    return(
      <p>
        {props.part} {props.exercises}
      </p>
    )
  }
const Content = () => {
  return(
    <div>
      <Part part={jyo1} exercises={exercises1}/>
      <Part part={jyo2} exercises={exercises2}/>
      <Part part={jyo3} exercises={exercises3}/>
    </div>
  )
}
const App = () => {
  return (
    <div>
      <Header course={course} />
      <Content/>
      <Total total= {exercises1 + exercises2 + exercises3} />
    </div>
  )
}
export default App