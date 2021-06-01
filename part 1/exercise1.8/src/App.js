import React, { useState } from 'react'

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const Statistics = ({ EASY, MODERATE, DIFFICULT, ALL, AVERAGE, POSITIVE }) => {
 
  return (
    <table>
      <tbody>
        <tr><Statistic feedback="EASY" value={EASY} /></tr>
        <tr><Statistic feedback="MODERATE" value={MODERATE} /></tr>
        <tr><Statistic feedback="DIFFICULT" value={DIFFICULT} /></tr>
        <tr><Statistic feedback="ALL" value={ALL} /></tr>
        <tr><Statistic feedback="AVERAGE" value= {AVERAGE} /></tr>
        <tr><Statistic feedback="POSITIVE" value={POSITIVE + '%'} /></tr>
      </tbody>
    </table>
  )
}

const Statistic = ({ Feedback, value }) => {
  return (
    <td>{Feedback} {value}</td>
  )
}

const App = () => {
  const [EASY, setEasy] = useState(0)
  const [MODERATE, setModerate] = useState(0)
  const [DIFFICULT, setDifficult] = useState(0)

  const handleEasyClick = () =>
    setEasy(EASY + 16)

  const handleModerateClick = () =>
    setModerate(MODERATE + 5)

  const handleDifficultClick = () =>
    setDifficult(DIFFICULT + 9)

    const ALL = EASY + MODERATE + DIFFICULT
    
    const AVERAGE = ((EASY - DIFFICULT) / ALL)

    const POSITIVE = (EASY / ALL) * 200


  return (
    <>
      <h1>Give FeedBack</h1>
      <Button handleClick={handleEasyClick} text="EASY" />
      <Button handleClick={handleModerateClick} text="MODERATE" />
      <Button handleClick={handleDifficultClick} text="DIFFICULT" />
      <h1>STATISTICS</h1>
      <Statistics EASY={EASY} MODERATE={MODERATE} DIFFICULT={DIFFICULT} ALL={ALL} AVERAGE={AVERAGE} POSITIVE={POSITIVE} />
    </>
  )
}

export default App