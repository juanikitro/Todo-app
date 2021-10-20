import React from 'react';
import './static/todoItem.css'

function TodoItem(props) {
    return(
        <li className='list-group-item d-flex p-2 justify-content-between align-items-center'>
            <i className={`bi ${props.completed === false ? 'bi-check-lg' : 'bi-x-lg'}`}></i>

            <p style={{margin: 0}} className={`text-center fs-4 mx-4 text ${props.completed && 'done'}`}>{props.text}</p>
        </li>
    )
}

export { TodoItem }