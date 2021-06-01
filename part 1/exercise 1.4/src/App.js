import React from 'react';

const Header = ( incr ) => {
	return (
		<div>
			<h1>{ incr.name}</h1>
		</div>
	);
};

const Content = (incr) => {
	return (
		<div>
      <p>
          {incr.parts[0].name}  {incr.parts[0].exercises}
          </p>
          <p>
          {incr.parts[1].name}  {incr.parts[1].exercises}
          </p>
          <p>
          {incr.parts[2].name}  {incr.parts[2].exercises}
      </p>
		
		</div>
	);
};

const Total = (incr) => {
	return (
		<div>
			<p>
				Number of exercises {incr.parts[0].exercises + incr.parts[1].exercises + incr.parts[2].exercises}
			</p>
		</div>
	);
};



const App = () => {

  const cour = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]


return (
  <div>
  
    <Header name={cour} />
    <Content parts={parts} />
    <Total parts={parts} />
    
  </div>
);
};



export default App