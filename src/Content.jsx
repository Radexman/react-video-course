import ItemList from './ItemList';
import './Content.css';

export default function Content({ items, handleDelete, handleCheck }) {
	return (
		<main>
			{items.length ? (
				<ItemList
					items={items}
					handleCheck={handleCheck}
					handleDelete={handleDelete}
				/>
			) : (
				<p style={{ marginTop: '2rem' }}>Your list is empty</p>
			)}
		</main>
	);
}
