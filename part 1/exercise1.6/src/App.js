import React, { useState } from 'react'

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const Statistics = ({ EASY, MODERATE,DIFFICULT, }) => {
 
  return (
    <table>
      <tbody>
        <tr><Statistic feedback="EASY" value={EASY} /></tr>
        <tr><Statistic feedback="MODERATE" value={MODERATE} /></tr>
        <tr><Statistic feedback="DIFFICULT" value={DIFFICULT} /></tr>
      </tbody>
    </table>
  )
}

const Statistic = ({ feedback, value }) => {
  return (
    <td>{feedback} {value}</td>
  )
}

const App = () => {
  const [EASY, setEasy] = useState(0)
  const [MODERATE, setModerate] = useState(0)
  const [DIFFICULT, setDifficult] = useState(0)

  const handleEasyClick = () =>
    setEasy(EASY + 1)

  const handleModerateClick = () =>
    setModerate(MODERATE + 2)

  const handleDifficultClick = () =>
    setDifficult(DIFFICULT + 1)

  return (
    <>
      <h1>give feedback</h1>
      <Button handleClick={handleEasyClick} text="EASY" />
      <Button handleClick={handleModerateClick} text="MODERATE" />
      <Button handleClick={handleDifficultClick} text="DIFFICULT" />
      <h1>statistics</h1>
      <Statistics EASY={EASY} MODERATE={MODERATE} DIFFICULT={DIFFICULT} />
    </>
  )
}

export default App