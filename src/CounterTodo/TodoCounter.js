import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';


function TodoCounter() {

    const { args } = React.useContext(TodoContext);

    let completedTodos = args.completed;
    let total = args.total;

    return (
        <div className="title"><h2 className="TodoCounter">Has completado {completedTodos} de {total} To do's</h2></div>
    );
}

export { TodoCounter };