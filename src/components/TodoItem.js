import React from 'react';
import '../static/todoItem.css';

function TodoItem(props) {
	return (
		<li className="list-group-item d-flex p-3 justify-content-between align-items-center">
			<div style={{ margin: 0, maxWidth: '90%', overflow: 'hidden' }}>
				<p
					style={{
						textAlign: 'left',
						overflow: 'hidden'
					}}
					className={` m-1 fs-6 text ${props.completed && 'done'}`}
				>
					{props.text}
				</p>
				<div className="d-flex">
					<p className="badge rounded-pill bg-light small m-1">
						{props.tag}
					</p>
					<p className="badge rounded-pill bg-secondary small m-1">
						{props.hour} h
					</p>
				</div>
			</div>
			<div
				className="d-flex"
				style={{ minWidth: '10%', flexDirection: 'column' }}
			>
				<i onClick={props.onDelete} className="my-1 bi bi-x-lg"></i>
				<i
					onClick={props.onComplete}
					className="my-1 bi bi-check-lg"
				></i>
			</div>
		</li>
	);
}

export { TodoItem };
