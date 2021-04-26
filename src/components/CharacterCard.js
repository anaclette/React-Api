import './CharacterContainer.scss';

const Character = ({ character }) => {
	return (
		<div className="CharacterContainer" key={character.id}>
			<div>
				<img src={character.image} />
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
	);
};

export default Character;

// Los componentes de React tienen un ciclo de vida. Aparecen, se modifican y desaparecen del DOM. Puedo acceder a esos ciclos de vida usando los efectos de React mediante los cuales puedo controlar que ocurre cuando el componente se monta, se actualiza y se desmonta con la funcion de limpieza (arrays de dependencia).
// Metodos de ciclo de vida de los componentes:
// Era parte de React en su version anterior, con clases. Yo no aprendi clases y ya no se utilizan mucho.
// ComponentDidMount, ComponentWillUpdate permitian acceder al ciclo de vida pero esas funciones ya no son necesarias desde que tenemos useEffect.
