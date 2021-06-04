import React, { useState,useEffect } from 'react'
import Inform from './components/Inform'
import Jyothsna from './components/Jyothsna'
import Forms from './components/Forms'
const App = (props) => {
  const [ persons, setPersons] = useState(props.persons) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [filter, setFilter] = useState('')
  
const Details=(event)=>{
  event.preventDefault()
  if(persons.find(persons=>persons.name===newName)){
    alert(newName+" is already added to the phonebook")
  }
  else if(persons.find(persons=>persons.number===newNumber)){
    alert(newNumber+" is already added to the phonebook")
  }
  else{
  const nameObject={
    name:newName,
    number:newNumber,
    id:persons.length+1
  }
  setPersons(persons.concat(nameObject))
  setNewName('')
  setNewNumber('')
}
}
const handleChange=(event)=>{

  setNewName(event.target.value)
}
const handleChangeNumber=(event)=>{

  setNewNumber(event.target.value)
}
const handleFilterChange = (e) => {
  setFilter(e.target.value)

}
const display=persons.filter((filtered)=>{
    if(filter==='')
    {
      return persons
    }
    else if(filtered.name.toLowerCase().includes(filter.toLowerCase()))  {
        return filtered
    }

  })

  return (
    <div>
      <h2>Phonebook</h2>
      <Jyothsna onChange={handleFilterChange}/>
      <Forms onSubmit={Details} valueName={newName} onChangeName={handleChange} valueNumber={newNumber} onChangeNumber={handleChangeNumber}/>
      <h2>Numbers</h2>
       {display.map(sort=>
        <Inform key={sort.id} sort={sort} />
        )}
    </div>
  )

}

export default App