import React from 'react';
import ReactDOM from 'react-dom';
import { TodoForm } from './TodoForm';
import '../static/modal.css';

function Modal() {
	return ReactDOM.createPortal(
		<div className="modal__background">
			<TodoForm />
		</div>,
		document.getElementById('modal')
	);
}
export { Modal };
