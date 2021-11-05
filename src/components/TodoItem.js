import React from 'react';
import '../static/todoItem.css';
import { TodoContext } from '../TodoContext/index';

function TodoItem(props) {
	const { hourDiff, setSearchTag, searchTag } = React.useContext(TodoContext);

	function searchThisTag() {
		if (searchTag !== props.tag) {
			setSearchTag(props.tag);
		} else {
			setSearchTag('');
		}
	}
	return (
		<li
			style={{ borderRadius: '20px' }}
			className={`shadow-sm mb-3 list-group-item d-flex p-3 justify-content-between align-items-center ${
				props.color === '1'
					? 'low'
					: props.color === '2'
					? 'medium'
					: props.color === '3'
					? 'high'
					: ''
			}`}
		>
			<div style={{ margin: 0, maxWidth: '90%', overflow: 'hidden' }}>
				<p
					style={{
						textAlign: 'left',
						overflow: 'hidden',
						fontWeight: '500'
					}}
					className={`m-1 fs-6 text ${props.completed && 'done'}`}
				>
					{props.text}
				</p>
				<div className="d-flex">
					<p
						style={{
							color: '#212529',
							backgroundColor: '#00000045'
						}}
						onClick={searchThisTag}
						className="badge text-light rounded-pill small m-1"
					>
						{props.tag}
					</p>
					<p
						style={{
							color: '#212529'
						}}
						className="small m-1"
					>
						{hourDiff(props.hour)}
					</p>
				</div>
			</div>
			<div
				className="d-flex"
				style={{ minWidth: '10%', flexDirection: 'column' }}
			>
				<button onClick={props.onDelete} className="btn">
					<i className="my-1 bi bi-x-lg"></i>
				</button>
				<button
					className={`btn ${props.completed && 'completed '}`}
					onClick={props.onComplete}
				>
					<i className="my-1 bi bi-check-lg"></i>
				</button>
			</div>
		</li>
	);
}

export { TodoItem };
