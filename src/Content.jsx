import { FaTrashAlt } from 'react-icons/fa';
import { useState } from 'react';
import './Content.css';
import data from './data';

export default function Content() {
	const [items, setItems] = useState(data);

	const handleCheck = (id) => {
		const listItems = items.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item));

		setItems(listItems);

		localStorage.setItem('shoppinglist', JSON.stringify(listItems));
	};

	const handleDlete = (id) => {
		const listItems = items.filter((item) => item.id !== id);

		setItems(listItems);

		localStorage.setItem('shoppinglist', JSON.stringify(listItems));
	};

	return (
		<main>
			{items.length ? (
				<ul>
					{items.map((item) => (
						<li
							className='item'
							key={item.id}
						>
							<input
								type='checkbox'
								checked={item.checked}
								onChange={() => handleCheck(item.id)}
							/>
							<label
								onDoubleClick={() => handleCheck(item.id)}
								style={item.checked ? { textDecoration: 'line-through' } : null}
							>
								{item.value}
							</label>
							<FaTrashAlt
								role='button'
								tabIndex='0'
								onClick={() => handleDlete(item.id)}
							/>
						</li>
					))}
				</ul>
			) : (
				<p style={{ marginTop: '2rem' }}>Your list is empty</p>
			)}
		</main>
	);
}
