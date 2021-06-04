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


const Course = ({ jyothsna }) => {
  return (
      <>
          <Header jyothsna={jyothsna} />
          <Content jyothsna={jyothsna} />
         
      </>
  )
}
const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 19,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        
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