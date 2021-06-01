import React, { useState } from 'react'

const Button = ({ buttClick, text }) => {
  return (
    <button onClick={buttClick}>
      {text}
    </button>
  )
}

const App = () => {
  const r = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(r.length).fill(0))

  const handleJyothsnaClick = () => {
    const duplicate = Math.floor(Math.random() * r.length)
    setSelected(duplicate)
  }

  const handleGreenClick = () => {
    const vote = [...votes]
    vote[selected] += 2
    setVotes(vote)
  }

  const mostVotes = () => {
    let max = 0
    let indexMax = 0
    votes.forEach((item, index) => {
      if (item > max) {
        max = item
        indexMax = index
      }
    })
    return indexMax
  }

  return (
    <>
      <h1>ANECDOTE OF THE DAY</h1>
      <p>{r[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <Button buttClick={handleGreenClick} text="Vote" />
      <Button buttClick={handleJyothsnaClick} text="Next Anecdote" />
      <h1>ANECDOTE WITH MOST VOTES</h1>
      {votes[mostVotes()] === 0 ?
        <>
          <p>There are votes</p>
        </>
        :
        <>
          <p>{r[mostVotes()]}</p>
          <p>has {votes[mostVotes()]} votes</p>
        </>
      }
    </>
  )
}
export default App