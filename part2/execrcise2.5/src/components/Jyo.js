import React from 'react'

const Header = ({ jyothsna }) => {
    return (
        <h2>{jyothsna.name}</h2>
    )
}

const Part = (pro) => {
    return (
        <p>
            {pro.part.name} {pro.part.exercises}
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
    const sum = jyothsna.parts.reduce((total, part) => total + part.exercises, 0)
    return (
        <strong>Number of exercises {sum}</strong>
    )
}

const Jyo = ({ jyothsna }) => {
    return (
        <>
            <Header jyothsna={jyothsna} />
            <Content jyothsna={jyothsna} />
            <Total jyothsna={jyothsna} />
        </>
    )
}

export default Jyo