import React, {useState} from 'react'

const Person = ({ jyothsna }) => {
  return (
    <div>
      &nbsp;&nbsp;{jyothsna.content}

    </div>
  )
}

const App = (pro) => {
  const [ persons, setPersons ] = useState(pro.persons)
  const [ newName, setNewName ] = useState('')

  const handleNameChange = (event1) => {
    console.log(event1.target.value)
    setNewName(event1.target.value)
  }

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      content: newName,
      id: persons.length + 1,
    }
  setPersons(persons.concat(nameObject))
    setNewName('')
  }

  const namesToShow = persons
  
  
  return (
    <div>
      <h2>&nbsp;Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          &nbsp;Name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          &nbsp;<button type="submit">Add</button>
        </div>
      </form>
      <h2>&nbsp;&nbsp;Numbers</h2>
      {namesToShow.map(jyothsna =>
          <Person key={jyothsna.id} jyothsna={jyothsna} />
        )}
      

    </div>
  )
}

export default App