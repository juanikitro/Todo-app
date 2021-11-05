import React from 'react';
import '../static/modal.css';

function CreateTodoButton(props) {
	const onClickButton = () => {
		props.setOpenModal((prevState) => !prevState);
	};
	return (
		<section
			id="mainButton"
			className="d-flex justify-content-end mb-3 mx-3 fixed-bottom"
		>
			<button
				type="button"
				className="btn btn-secondary"
				onClick={onClickButton}
				style={{
					borderRadius: '20px',
					backgroundColor: '#0000000a',
					borderColor: '#ffffff00'
				}}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="64"
					height="64"
					fill="#343434"
					className="bi bi-plus"
					viewBox="0 0 16 16"
				>
					<path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
				</svg>
			</button>
		</section>
	);
}

export { CreateTodoButton };
