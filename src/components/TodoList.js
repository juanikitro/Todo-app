import React from 'react';

function TodoList(props) {
	return (
		<section className="">
			<ul className="list-group list-group-flush">{props.children}</ul>
		</section>
	);
}

export { TodoList };
