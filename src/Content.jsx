import { useState } from 'react';
import './Content.css';

export default function Content() {
	const [name, setName] = useState('Emilia');
	const [count, setCount] = useState(0);

	const handleNameChange = () => {
		const names = ['Radek', 'Emilia', 'Dawid', 'Miłosz'];
		setName(names[Math.floor(Math.random() * names.length)]);
	};

	const handleClick = () => {
		setCount(count + 1);
		console.log(count);
	};

	const handleClickTwo = () => {
		console.log(count);
	};

	return (
		<main>
			<p onDoubleClick={handleClick}>Hello {name}</p>
			<button onClick={handleNameChange}>Change Name</button>
			<button onClick={handleClick}>Click it</button>
			<button onClick={handleClickTwo}>Click it</button>
		</main>
	);
}
