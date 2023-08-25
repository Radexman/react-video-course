import { FaTrashAlt } from 'react-icons/fa';
import { useState } from 'react';
import './Content.css';
import data from './data';

export default function Content() {
	const [items, setItems] = useState(data);

	const handleCheck = (id) => {
		const listItems = items.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item));
		setItems(listItems);
	};

	return (
		<main>
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
						<label>{item.value}</label>
						<FaTrashAlt
							role='button'
							tabIndex='0'
						/>
					</li>
				))}
			</ul>
		</main>
	);
}
