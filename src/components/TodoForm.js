import React from 'react';
import { TodoContext } from '../TodoContext';

function TodoForm() {
	const [newTodoTitle, setnewTodoTitle] = React.useState('');
	const [newTodoTag, setnewTodoTag] = React.useState('');
	const [newTodohour, setnewTodohour] = React.useState('');

	const { addTodo, setOpenModal } = React.useContext(TodoContext);

	const onChangeTitle = (event) => {
		setnewTodoTitle(event.target.value);
	};
	const onChangeTag = (event) => {
		setnewTodoTag(event.target.value);
	};
	const onChangeHour = (event) => {
		setnewTodohour(event.target.value);
	};

	const onCancel = () => {
		setOpenModal(false);
	};
	const onSubmit = (event) => {
		event.preventDefault();
		addTodo(newTodoTitle, newTodoTag, newTodohour);
		setOpenModal(false);
	};

	return (
		<React.Fragment>
			<form
				style={{
					width: '80%',
					borderRadius: '3%'
				}}
				onSubmit={onSubmit}
				className="card bg-light py-4 px-3"
			>
				<input
					style={{
						textAlign: 'center',
						height: '50px'
					}}
					className="my-3 form-control"
					value={newTodoTitle}
					onChange={onChangeTitle}
					placeholder="Title"
				/>
				<input
					style={{ textAlign: 'center', height: '50px' }}
					className="my-3 form-control"
					value={newTodoTag}
					onChange={onChangeTag}
					placeholder="Tag"
				/>
				<input
					type="number"
					style={{ textAlign: 'center', height: '50px' }}
					className="my-3 form-control"
					value={newTodohour}
					onChange={onChangeHour}
					placeholder="How hours?"
				/>
				<div className="pt-3 d-flex justify-content-around">
					<button
						className="btn primary-btn"
						type="button"
						onClick={onCancel}
					>
						Cancel
					</button>
					<button className="btn primary-btn" type="submit">
						Create
					</button>
				</div>
			</form>
		</React.Fragment>
	);
}

export { TodoForm };
