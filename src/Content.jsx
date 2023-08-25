import { FaTrashAlt } from 'react-icons/fa';
import './Content.css';

export default function Content({ items, setItems, handleDlete, handleCheck }) {
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
