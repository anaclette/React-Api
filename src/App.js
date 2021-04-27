import React, { useState, useEffect } from 'react';
import Search from './components/Search';
import Character from './components/CharacterCard';
import Filters from './components/Filters';
import './App.css';
import './components/Search.scss';

const App = () => {
	const [ characters, setCharacters ] = useState([]);
	const [ value, setValue ] = useState('');
	const [ search, setSearch ] = useState(0);
	const [ status, setStatus ] = useState('');
	const [ page, setPage ] = useState(1);
	// const nextPage = [];
	useEffect(
		() => {
			fetch(`https://rickandmortyapi.com/api/character/?page=${page}?name=${value}&status=${status}`)
				.then((res) => res.json())
				.then((data) => {
					// console.log(data.info.next);
					setCharacters(data.results);
					// nextPage.push(data.info.next);
				});
		},
		[ search, page ]
	);

	const handleChange = (e) => {
		setValue(e.target.value);
	};
	const handleClick = () => {
		setSearch(search + 1);
	};
	const handleChangeStatus = (e) => {
		setStatus(e.target.value);
	};

	const handleClickNext = () => {
		setPage(page + 1);
		console.log(page);
	};
	return (
		<div>
			<div>
				<div className="Search">
					<Search handleChange={handleChange} value={value} />
					<label>Status</label>
					<div>
						<Filters handleChangeStatus={handleChangeStatus} status={status} />
					</div>
					<button onClick={handleClick}>Search character</button>
				</div>
			</div>
			<div className="App">
				{characters.map((character) => <Character key={character.id} character={character} />)}
			</div>
			<div className="Search">
				<button onClick={handleClickNext}>Next page</button>
			</div>
		</div>
	);
};

export default App;
