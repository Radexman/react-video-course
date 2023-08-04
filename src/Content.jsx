import { FaTrashAlt } from 'react-icons/fa';
import { useState } from 'react';
import './Content.css';
import data from './data';

export default function Content() {
	const [items, setItems] = useState(data);

	return (
		<main>
			<ul>
				{items.map((item) => (
					<li className="item" key={item.id}>
						<input type="checkbox" checked={item.checked} />
						<label>{item.value}</label>
						<FaTrashAlt role="button" tabIndex="0" />
					</li>
				))}
			</ul>
		</main>
	);
}
