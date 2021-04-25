import React, { useState, useEffect } from 'react';
// import Character from './components/CharacterCard';
import './App.css';
import './components/CharacterContainer.scss';

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
				<input onChange={handleChange} value={value} />
				<label>Status</label>
				<input onChange={handleChangeStatus} type="radio" value="alive" name="status" /> Alive
				<input onChange={handleChangeStatus} type="radio" value="dead" name="status" /> Dead
				<input onChange={handleChangeStatus} type="radio" value="unknown" name="status" /> Unknown
				<button onClick={handleClick}>Search character</button>
			</div>
			<div className="App">
				{characters.map((character) => (
					<div className="CharacterContainer" key={character.id}>
						<div>
							<img className="CharacterContainer" alt={character.name} src={character.image} />
						</div>
						<div>
							<h2 key={character.id}>{character.name}</h2>
							<p>
								{character.status}
								{character.species}
							</p>
							<p>Last known location:</p>
							<p>{character.location.name}</p>
							<p>First seen in:</p>
							<p>{character.origin.name}</p>
						</div>
					</div>
				))}
				{/* <button onClick={handleClick}>Next page</button> */}
			</div>
		</div>
	);
};

export default App;
