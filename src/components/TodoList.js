import React from 'react';

function TodoList(props) {
	return (
		<section style={{ marginBottom: '50px' }} className="">
			<ul className="list-group list-group-flush">{props.children}</ul>
			<p className="text-center fs-5 text my-5">No more!</p>
		</section>
	);
}

export { TodoList };
