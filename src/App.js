import './App.css';
import ButtonComponent from './components/ButtonComponent';
import ImageComponent from './components/ImageComponent';

function App() {
	return (
		<div className='App'>
			<main>
				<div className='container'>
					<div style={{ display: 'flex' }}>
						<ButtonComponent bottonName='Prendi Me!' />
						<ButtonComponent bottonName='O me!' />
					</div>
					<div style={{ display: 'flex' }}>
						<ImageComponent url='http://placekitten.com/200/300' alt='cat' />
						<ImageComponent url='http://placedog.net/200/300' alt='dog' />
					</div>
				</div>
			</main>
		</div>
	);
}

export default App;
