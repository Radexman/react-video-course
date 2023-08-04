import './Content.css';

export default function Content() {
	const handleNameChange = () => {
		const names = ['Radek', 'Emilia', 'Dawid', 'Miłosz'];
		return names[Math.floor(Math.random() * names.length)];
	};

	const handleClick = () => {
		console.log('You clicked it');
	};

	const handleClickTwo = (name) => {
		console.log(`${name} was clicked`);
	};

	const handleClickThree = (e) => {
		console.log(e.target.innerText);
	};

	return (
		<main>
			<p onDoubleClick={handleClick}>Hello {handleNameChange()}</p>
			<button onClick={handleClick}>Click it</button>
			<button onClick={() => handleClickTwo('Dave')}>Click it</button>
			<button onClick={(e) => handleClickThree(e)}>Click it</button>
		</main>
	);
}
