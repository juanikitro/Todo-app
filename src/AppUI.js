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
			<section className="container">
				<section className="row mt-5">
					<article className="col">
						<TodoSearch />
					</article>
					<article className="col">
						<TodoList>
							{error && <p>Shit, here we go again :(</p>}
							{loading && <p>Thinking...</p>}
							{!loading && !searchedTodos.length && (
								<p>Yo can create your first TODO!</p>
							)}

							{searchedTodos.map((todo) => (
								<TodoItem
									key={todo.text}
									text={todo.text}
									tag={todo.tag}
									hour={todo.hour}
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
			</section>
		</React.Fragment>
	);
}

export { AppUI };
