import logo from './logo.svg';
import './App.css';

function App() {
	const handleNameChange = () => {
		const names = ['Radek', 'Emilia', 'Dawid', 'Miłosz'];
		return names[Math.floor(Math.random() * names.length)];
	};

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>Hello {handleNameChange()}!</p>
			</header>
		</div>
	);
}

export default App;
