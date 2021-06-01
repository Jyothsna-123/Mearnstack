import React from 'react';


const Header = ({ course }) => {
	return (
		<div>
			<h1>{course.name}</h1>
		</div>
	);
};

const Content = ({increase}) => {
	return (
		<div>
			<Part part={increase.parts[0].name} exercises={increase.parts[0].exercises} />
			<Part part={increase.parts[1].name} exercises={increase.parts[1].exercises} />
			<Part part={increase.parts[2].name} exercises={increase.parts[2].exercises} />
		</div>
	);
};

const Total = ({increase}) => {
	return (
		<div>
			<p>
				Number of exercises {increase.parts[0].exercises + increase.parts[1].exercises + increase.parts[2].exercises}
			</p>
		</div>
	);
};

const Part = (props) => {
	return (
		<div>
			<p>
				{props.part} {props.exercises}
			</p>
		</div>
	);
};

const App = () => {
	const course = {
		name: 'Half Stack applications development',
		parts: [
			{
				name: 'Fundamentals of React',
				exercises: 20
			},
			{
				name: 'Using props to pass data',
				exercises: 57
			},
			{
				name: 'State of a component',
				exercises: 17
			}
		]
	};

	return (
		<div>
			<Header course={course} />
			<Content increase={course} />

			<Total increase={course} />
		</div>
	);
};

export default App