import React from 'react';
import { TodoCounter } from '../CounterTodo/TodoCounter';
import { TodoContext } from '../TodoContext';
import { TodoSearch } from '../SearchTodo/TodoSearch';
import { CreateTodoButton } from '../CreateTodo/CreateTodoButton';
import { TodoList } from '../ListTodo/TodoList';
import { TodoItem } from '../ItemTodo/TodoItem';
import { TodoForm } from '../TodoForm';
import { Modal } from '../Modal';

function AppUI() {

    const {
        error,
        loading,
        searchedTodos,
        changeStateTodo,
        deleteTodo,
        openModal,
        setOpenModal
    } = React.useContext(TodoContext);

    return (
        <React.Fragment>
            <TodoCounter />
            <TodoSearch />
            <TodoList>
                {error && <p> Ups! hubo uno error</p>}
                {loading && <p>Cargando ...</p>}
                {(!loading && !searchedTodos.length && <p>Crea tu primer To Do!</p>)}
                {searchedTodos.map(todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onChangeStateTodo={() => { changeStateTodo(todo.text) }}
                        onDeleteTodo={() => { deleteTodo(todo.text) }}
                    />
                ))}
            </TodoList>
            {
                !!openModal && (
                    <Modal>
                        <TodoForm/>
                    </Modal>)
            }
            <CreateTodoButton setOpenModal={setOpenModal} />
        </React.Fragment>
    );
}

export { AppUI };