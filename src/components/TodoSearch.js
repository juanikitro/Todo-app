import React from 'react';
import { TodoContext } from '../TodoContext';

function TodoSearch() {
	const {
		searchTitle,
		setSearchTitle,
		searchColor,
		setSearchColor,
		setSearchTodayTodos,
		setSearchDoTodos
	} = React.useContext(TodoContext);

	const onSearchTitleChange = (event) => {
		setSearchTitle(event.target.value);
	};

	const onColorChange = (event) => {
		setSearchColor(event.target.value);
	};

	const searchTodayTodos = () => {
		setSearchTodayTodos((prevState) => !prevState);
	};
	const searchDoTodos = () => {
		setSearchDoTodos((prevState) => !prevState);
	};
	return (
		<React.Fragment>
			<button
				className="btn w-100"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#collapseExample"
				aria-expanded="false"
				aria-controls="collapseExample"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="28"
					height="28"
					fill="currentColor"
					class="bi bi-filter"
					viewBox="0 0 16 16"
				>
					<path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
				</svg>
			</button>
			<div class="collapse p-3" id="collapseExample">
				<input
					onChange={onSearchTitleChange}
					value={searchTitle}
					className="mb-4 form-control text-center"
					type="text"
					placeholder="Tags"
					style={{
						borderRadius: '12.5px'
					}}
				/>
				<select
					style={{
						textAlign: 'center',
						borderRadius: '12.5px'
					}}
					value={searchColor}
					onChange={onColorChange}
					class="mb-4 form-control text-center"
					id="inputGroupSelect04"
				>
					<option value="0" selected>
						Priority
					</option>
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
				<div className="mb-3 d-flex justify-content-center align-items-center">
					<label className="mx-2">Today tasks</label>
					<input
						className="mx-2"
						style={{ width: '16px', height: '16px' }}
						type="checkbox"
						onChange={searchTodayTodos}
					/>
				</div>
				<div className="d-flex justify-content-center align-items-center">
					<label className="mx-2">Tasks done</label>
					<input
						className="mx-2"
						style={{ width: '16px', height: '16px' }}
						type="checkbox"
						onChange={searchDoTodos}
					/>
				</div>
			</div>
		</React.Fragment>
	);
}

export { TodoSearch };
