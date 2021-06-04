import React from 'react'

const Header = ({ jyothsna }) => {
  return (
      <h2>{jyothsna.name}</h2>
  )
}

const Part = (fix) => {
  return (
      <p>
          {fix.part.name} {fix.part.exercises}
      </p>
  )
}

const Content = ({ jyothsna }) => {
  return (
      <div>
          {jyothsna.parts.map((part) => <Part part={part} />)}
      </div>
  )
}


const Total = ({ jyothsna }) => {
const sum1=jyothsna.parts[0].exercises + jyothsna.parts[1].exercises + jyothsna.parts[2].exercises
return (
   <strong>total of {sum1} exercises</strong>
		
	);
}

const Course = ({ jyothsna }) => {
  return (
      <>
          <Header jyothsna={jyothsna} />
          <Content jyothsna={jyothsna} />
          <Total jyothsna={jyothsna} />
      </>
  )
}
const App = () => {
  const courses = [
    {
      name: 'Half Stack Application Development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 17,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    
  ]

  return (
    <>
      
      {courses.map(jyothsna => <Course jyothsna={jyothsna} />)}
    </>
  )
}

export default App