import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import './App.css';

function App() {
	return (
		<div className='App'>
			<Header title='Grocery List' />
			<Content />
			<Footer />
		</div>
	);
}

export default App;
