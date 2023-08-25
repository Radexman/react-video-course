import './Footer.css';

function Footer({ length }) {
	const today = new Date();
	return (
		<footer>
			<p style={{ fontSize: '0.5rem', textAlign: 'center' }}>
				{length} List {length === 1 ? 'item' : 'items'}
			</p>
			<p style={{ fontSize: '0.5rem' }}>Copyright &copy; {today.getFullYear()}</p>
		</footer>
	);
}
export default Footer;
