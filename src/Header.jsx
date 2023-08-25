import './Header.css';

export default function Header({ title }) {
	return (
		<header>
			<h1 style={{ marginInline: 'auto', padding: '4px' }}>{title}</h1>
		</header>
	);
}

Header.defaultProps = {
	title: 'Default Title',
};
