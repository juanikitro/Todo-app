import React from 'react';
import { TodoContext } from '../TodoContext';

function TodoCounter() {
	const { completedTodos, totalTodos } = React.useContext(TodoContext);

	return (
		<h2
			style={{ color: '#343434' }}
			className=" display-6 font-weight-light text-center"
		>
			{completedTodos} / {totalTodos} finished TODOs
		</h2>
	);
}

export { TodoCounter };
