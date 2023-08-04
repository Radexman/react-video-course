import './Content.css';

export default function Content() {
	const handleNameChange = () => {
		const names = ['Radek', 'Emilia', 'Dawid', 'Miłosz'];
		return names[Math.floor(Math.random() * names.length)];
	};
	return (
		<main>
			<p>Hello {handleNameChange()}</p>
		</main>
	);
}
