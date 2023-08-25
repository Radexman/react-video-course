import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import './App.css';
import { useState } from 'react';
import data from './data';

function App() {
	const [items, setItems] = useState(data);

	// Check checkbox, set item's state and set to local storage
	const handleCheck = (id) => {
		const listItems = items.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item));
		setItems(listItems);

		localStorage.setItem('shoppinglist', JSON.stringify(listItems));
	};

	// Delete item, update item's state and update local storage
	const handleDlete = (id) => {
		const listItems = items.filter((item) => item.id !== id);

		setItems(listItems);

		localStorage.setItem('shoppinglist', JSON.stringify(listItems));
	};

	return (
		<div className='App'>
			<Header title='Grocery List' />
			<Content
				items={items}
				setItems={setItems}
				handleDelete={handleDlete}
				handleCheck={handleCheck}
			/>
			<Footer />
		</div>
	);
}

export default App;
