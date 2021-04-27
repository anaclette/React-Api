const Filters = ({ status, handleChangeStatus }) => {
	return (
		<div>
			<input onChange={handleChangeStatus} type="radio" value="alive" name={status} /> Alive
			<input onChange={handleChangeStatus} type="radio" value="dead" name={status} /> Dead
			<input onChange={handleChangeStatus} type="radio" value="unknown" name={status} /> Unknown
		</div>
	);
};

export default Filters;
