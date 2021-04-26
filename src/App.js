import React, { useState, useEffect } from 'react';
import Search from './components/Search';
import Character from './components/CharacterCard';
// import Filters from './components/Filters';
import './App.css';

const App = () => {
	const [ characters, setCharacters ] = useState([]);
	const [ value, setValue ] = useState('');
	const [ search, setSearch ] = useState(0);
	const [ status, setStatus ] = useState('');
	useEffect(
		() => {
			fetch(`https://rickandmortyapi.com/api/character/?name=${value}&status=${status}`)
				.then((res) => res.json())
				.then((data) => {
					// console.log(data.info.next);
					setCharacters(data.results);
				});
		},
		[ search ]
	);
	//   const handleClick = () => {
	// setCharacters([...characters], )
	//   }
	const handleChange = (e) => {
		setValue(e.target.value);
	};
	const handleClick = () => {
		setSearch(search + 1);
	};
	const handleChangeStatus = (e) => {
		setStatus(e.target.value);
	};
	return (
		<div>
			<div>
				<Search handleChange={handleChange} value={value} />
				<label>Status</label>
				<div>
					<input onChange={handleChangeStatus} type="radio" value="alive" name="status" /> Alive
					<input onChange={handleChangeStatus} type="radio" value="dead" name="status" /> Dead
					<input onChange={handleChangeStatus} type="radio" value="unknown" name="status" /> Unknown
				</div>
				<button onClick={handleClick}>Search character</button>
			</div>
			<div className="App">
				{characters.map((character) => <Character key={character.id} character={character} />)}
				{/* <button onClick={handleClick}>Next page</button> */}
			</div>
		</div>
	);
};

export default App;
