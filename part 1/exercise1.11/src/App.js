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
        <Statistic text="GOOD" value={GOOD} />
        <Statistic text="MEDIUM" value={MEDIUM} />
        <Statistic text="HARD" value={HARD} />
        <Statistic text="TOTAL" value={TOTAL} />
        <Statistic text="AVERAGE" value= {AVERAGE} />
        <Statistic text="POSITIVE" value={POSITIVE + '%'} />
      </tbody>
    </table>
  )
}

const Statistic = ({ text, value }) => {
  return (
    <tr>
    <td>{text} </td>
    <td>{value}</td>
    </tr>
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
    setDifficult(HARD + 1)

    const TOTAL = GOOD + MEDIUM + HARD
    
    const AVERAGE = ((GOOD - HARD) / TOTAL)

    const POSITIVE = (GOOD / TOTAL) * 100


  return (
    <>
      <h1>Give FeedBack</h1>
      <Button handleClick={handleEasyClick} text="EASY" />
      <Button handleClick={handleModerateClick} text="MODERATE" />
      <Button handleClick={handleDifficultClick} text="DIFFICULT" />
      <h1>STATICSTICS</h1>
      <Statistics GOOD={GOOD} MEDIUM={MEDIUM} HARD={HARD} TOTAL={TOTAL} AVERAGE={AVERAGE} POSITIVE={POSITIVE}  />
    </>
  )
}

export default App