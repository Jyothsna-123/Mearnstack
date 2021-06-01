import React, { useState } from 'react'

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const Statistics = ({ GOOD, MEDIUM, HARD, TOTAL, AVERAGE, POSITIVE }) => {
  if (GOOD === 0 & MEDIUM === 0 & HARD === 0) {
    return (
      <p>NO FEEDBACK GIVEN</p>
    )
  }

  return (
    <table>
      <tbody>
        <tr><Statistic feedback="GOOD" value={GOOD} /></tr>
        <tr><Statistic feedback="MEDIUM" value={MEDIUM} /></tr>
        <tr><Statistic feedback="HARD" value={HARD} /></tr>
        <tr><Statistic feedback="TOTAL" value={TOTAL} /></tr>
        <tr><Statistic feedback="AVERAGE" value= {AVERAGE} /></tr>
        <tr><Statistic feedback="POSITIVE" value={POSITIVE + '%'} /></tr>
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
  const [GOOD, setEasy] = useState(0)
  const [MEDIUM, setModerate] = useState(0)
  const [HARD, setDifficult] = useState(0)

  const handleEasyClick = () =>
    setEasy(GOOD + 1)

  const handleModerateClick = () =>
    setModerate(MEDIUM + 1)

  const handleDifficultClick = () =>
    setDifficult(HARD + 10)

    const TOTAL = GOOD + MEDIUM + HARD
    
    const AVERAGE = ((GOOD - HARD) / TOTAL)

    const POSITIVE = (GOOD / TOTAL) * 100


  return (
    <>
      <h1>Give FeedBack</h1>
      <Button handleClick={handleEasyClick} text="EASY" />
      <Button handleClick={handleModerateClick} text="MODERATE" />
      <Button handleClick={handleDifficultClick} text="DIFFICULT" />
      <h1>STATISTICS</h1>
      <Statistics GOOD={GOOD} MEDIUM={MEDIUM} HARD={HARD} TOTAL={TOTAL} AVERAGE={AVERAGE} POSITIVE={POSITIVE} />
    </>
  )
}

export default App