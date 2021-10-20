import React from 'react';

function TodoList(props) {
    return(
        <section className='mt-5'>
            <ul className='list-group list-group-flush'>
                {props.children}
            </ul>
        </section>
    )
}

export { TodoList }