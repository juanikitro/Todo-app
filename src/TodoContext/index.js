import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider(props) {
	const {
		item: todos,
		saveItem: saveTodos,
		loading,
		error
	} = useLocalStorage('TODOS_V1', []);
	const [searchTag, setSearchTag] = React.useState('');
	const [searchColor, setSearchColor] = React.useState('');
	const [searchTodayTodos, setSearchTodayTodos] = React.useState(false);
	const [searchDoTodos, setSearchDoTodos] = React.useState(false);
	const [openModal, setOpenModal] = React.useState(false);

	const completedTodos = todos.filter((todo) => !!todo.completed).length;
	const totalTodos = todos.length;

	let searchedTodos = [todos];

	if (!searchTag.length >= 1) {
		searchedTodos = todos;
	} else {
		searchedTodos = todos.filter((todo) => {
			const todoText = todo.tag.toLowerCase();
			const searchText = searchTag.toLowerCase();
			return todoText.includes(searchText);
		});
	}

	if (searchTodayTodos === true) {
		searchedTodos = todos.filter((todo) => {
			const fechaInicio = new Date().getTime();
			const fechaFin = new Date(todo.hour).getTime();
			const diff = fechaFin - fechaInicio;
			const noRealDiff = Math.round(diff / (1000 * 60 * 60 * 24));
			return noRealDiff === -0;
		});
	}

	if (searchDoTodos === true) {
		searchedTodos = todos.filter((todo) => {
			if (todo.completed === true) {
				return todo;
			}
		});
	}

	if (searchColor === '1') {
		searchedTodos = searchedTodos.filter((todo) => {
			const todoColor = todo.color;
			return todoColor.includes(searchColor);
		});
	}
	if (searchColor === '2') {
		searchedTodos = searchedTodos.filter((todo) => {
			const todoColor = todo.color;
			return todoColor.includes(searchColor);
		});
	}
	if (searchColor === '3') {
		searchedTodos = searchedTodos.filter((todo) => {
			const todoColor = todo.color;
			return todoColor.includes(searchColor);
		});
	}

	const completeTodo = (text) => {
		const todoIndex = todos.findIndex((todo) => todo.text === text);
		const newTodos = [...todos];
		if (newTodos[todoIndex].completed === true) {
			newTodos[todoIndex].completed = false;
		} else {
			newTodos[todoIndex].completed = true;
		}
		saveTodos(newTodos);
	};

	const addTodo = (text, tag, hour, color) => {
		const newTodos = [...todos];
		newTodos.push({
			completed: false,
			text,
			tag,
			hour,
			color
		});
		saveTodos(newTodos);
	};

	const deleteTodo = (text) => {
		const todoIndex = todos.findIndex((todo) => todo.text === text);
		const newTodos = [...todos];
		newTodos.splice(todoIndex, 1);
		saveTodos(newTodos);
	};

	function hourDiff(hour) {
		const fechaInicio = new Date().getTime();
		const fechaFin = new Date(hour).getTime();

		const diff = fechaFin - fechaInicio;
		const noRealDiff = Math.round(diff / (1000 * 60 * 60 * 24));
		const realDiff = noRealDiff + ' days left';

		if (hour === '') {
			return '';
		} else if (realDiff === '0 days left') {
			return 'Today!';
		} else if (realDiff === '1 days left') {
			return 'Tomorrow!';
		} else if (realDiff === '-1 days left') {
			return 'Yesterday...';
		} else {
			return realDiff;
		}
	}

	return (
		<TodoContext.Provider
			value={{
				loading,
				error,
				totalTodos,
				completedTodos,
				searchTag,
				setSearchTag,
				setSearchColor,
				searchColor,
				setSearchTodayTodos,
				setSearchDoTodos,
				searchedTodos,
				completeTodo,
				deleteTodo,
				addTodo,
				openModal,
				setOpenModal,
				hourDiff
			}}
		>
			{props.children}
		</TodoContext.Provider>
	);
}

export { TodoContext, TodoProvider };
