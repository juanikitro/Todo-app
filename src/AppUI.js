import React from 'react';
import './static/bootstrap.min.css';
import { TodoContext } from './TodoContext/index.js';
import { TodoCounter } from './components/TodoCounter.js';
import { TodoSearch } from './components/TodoSearch.js';
import { TodoList } from './components/TodoList.js';
import { TodoItem } from './components/TodoItem.js';
import { CreateTodoButton } from './components/CreateTodoButton.js';
import { Modal } from './components/Modal';
import { TodoForm } from './components/TodoForm.js';

function AppUI() {
	const {
		error,
		loading,
		searchedTodos,
		completeTodo,
		deleteTodo,
		openModal,
		setOpenModal
	} = React.useContext(TodoContext);

	return (
		<React.Fragment>
			<TodoCounter />
			<main className="container d-flex align-content-between flex-wrap flex-column">
				<section className=" d-md-inline-flex w-100 justify-content-around">
					<article
						style={{
							minWidth: '30%',
							backgroundColor: '#0000000a',
							borderRadius: '20px',
							height: '100%'
						}}
						className="mt-5 p-3 d-sm-block w-auto"
					>
						<TodoSearch />
					</article>
					<article
						style={{
							minWidth: '60%'
						}}
						className=" mt-5 d-sm-block"
					>
						<TodoList>
							{error && (
								<p className="text-center">
									Shit, here we go again :(
								</p>
							)}
							{loading && (
								<p className="text-center">Loading...</p>
							)}
							{!loading && !searchedTodos.length && (
								<p className="text-center">
									No more! Congratulations!
								</p>
							)}

							{searchedTodos.map((todo) => (
								<TodoItem
									key={todo.text}
									text={todo.text}
									tag={todo.tag}
									hour={todo.hour}
									color={todo.color}
									completed={todo.completed}
									onComplete={() => completeTodo(todo.text)}
									onDelete={() => deleteTodo(todo.text)}
								/>
							))}
						</TodoList>
						{!!openModal && (
							<Modal>
								<TodoForm />
							</Modal>
						)}

						<CreateTodoButton setOpenModal={setOpenModal} />
					</article>
				</section>
				<footer
					className="text-center"
					style={{
						marginTop: '100px'
					}}
				>
					<p>Made with ❤️ by JuaniKitro</p>
				</footer>
			</main>
		</React.Fragment>
	);
}

export { AppUI };
