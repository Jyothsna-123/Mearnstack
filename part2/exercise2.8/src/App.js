import React, {useState} from 'react'

const Person = ({ jyothsna }) => {
  return (
    <div>
      
      &nbsp;&nbsp;{jyothsna.content} 
      &nbsp;&nbsp;{jyothsna.number}

    </div>
  )
}

const App = (pro) => {
  const [ persons, setPersons ] = useState(pro.persons)
  const [ newName, setNewName ] = useState('')
  const [number, setNumber] = useState('')

  const handleNameChange = (event1) => {
    setNewName(event1.target.value)
  }
  const handleNumberChange = (event1) => {
    setNumber(event1.target.value)
  }

  const addName = (event1) => {
    event1.preventDefault()
    if ( persons.find(person=>person.content===newName ) ) 
    {
      window.alert(newName + ' is already added to phonebook');
    }
  else
  {
    const nameObject = 
    {
      content: newName,
      number: number,
      id: persons.length + 1,
    }
  
  setPersons(persons.concat(nameObject))
  }
  
    setNewName('')  
    setNumber('')  
  
  
  }
  const namesToShow = persons


 
  
  
  return (
    <div>
      <h2>&nbsp;&nbsp;Phonebook</h2>
      <form onSubmit={addName}>
        <div>
         &nbsp;&nbsp;&nbsp;Name: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input  value={newName} onChange={handleNameChange}/><br />
          <br></br>&nbsp;&nbsp;&nbsp;Number: &nbsp;&nbsp;&nbsp;&nbsp; <input type='tel' pattern="[0-9\-]+" value={number} onChange={handleNumberChange}/>
        </div>
        <div>
        <br></br>&nbsp;&nbsp;&nbsp;<button type="submit">Add</button>
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