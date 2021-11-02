import React from 'react';
import { TodoContext } from '../TodoContext';

function TodoSearch() {
	const { searchValue, setSearchValue } = React.useContext(TodoContext);

	const onSearchValueChange = (event) => {
		console.log(event.target.value);
		setSearchValue(event.target.value);
	};

	return (
		<input
			onChange={onSearchValueChange}
			value={searchValue}
			className="mt-4 form-control text-center"
			type="text"
			placeholder="Search in your tags"
		/>
	);
}

export { TodoSearch };
