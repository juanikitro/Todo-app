import React from 'react';
import { TodoContext } from '../TodoContext';

function TodoForm() {
	const [newTodoTitle, setnewTodoTitle] = React.useState('');
	const [newTodoTag, setnewTodoTag] = React.useState('');
	const [newTodohour, setnewTodohour] = React.useState('');
	const [newTodoColor, setnewTodoColor] = React.useState('');

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
	const onChangeColor = (event) => {
		setnewTodoColor(event.target.value);
	};

	const onCancel = () => {
		setOpenModal(false);
	};
	const onSubmit = (event) => {
		event.preventDefault();
		addTodo(newTodoTitle, newTodoTag, newTodohour, newTodoColor);
		setOpenModal(false);
	};

	return (
		<React.Fragment>
			<form
				style={{
					width: '80%',
					borderRadius: '20px'
				}}
				onSubmit={onSubmit}
				className="card bg-light py-4 px-3 vw-50"
			>
				<input
					style={{
						textAlign: 'center',
						height: '50px'
					}}
					className="my-3 form-control mx-auto w-75"
					value={newTodoTitle}
					onChange={onChangeTitle}
					placeholder="Title"
				/>
				<input
					style={{ textAlign: 'center', height: '50px' }}
					className="my-3 form-control mx-auto w-75"
					value={newTodoTag}
					onChange={onChangeTag}
					placeholder="Tag"
				/>
				<input
					type="date"
					style={{ textAlign: 'center', height: '50px' }}
					className="my-3 form-control mx-auto w-75"
					value={newTodohour}
					onChange={onChangeHour}
					placeholder="When"
				/>
				<div>
					<select
						style={{ textAlign: 'center', height: '50px' }}
						value={newTodoColor}
						onChange={onChangeColor}
						class="custom-select my-3 form-control mx-auto w-75 d-flex justify-content-center"
						id="inputGroupSelect04"
					>
						<option selected>Priority</option>
						<option
							style={{
								backgroundColor: '#fff5ca'
							}}
							value="1"
						>
							Low
						</option>
						<option
							style={{
								backgroundColor: '#ffc27d'
							}}
							value="2"
						>
							Medium
						</option>
						<option
							style={{
								backgroundColor: '#ff9b9b'
							}}
							value="3"
						>
							High
						</option>
					</select>
				</div>
				<div className="pt-3 d-flex justify-content-around">
					<button
						className="btn fs-5"
						type="button"
						onClick={onCancel}
					>
						Cancel
					</button>
					<button className="btn fs-5" type="submit">
						Create
					</button>
				</div>
			</form>
		</React.Fragment>
	);
}

export { TodoForm };
