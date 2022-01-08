import React from 'react';
import { useLocalStorage } from './UseLocalStorage';

const TodoContext = React.createContext();

function TodoProvider(props) {

    const {
        item: todos,
        saveItem: saveTodos,
        loading, error
    } = useLocalStorage('TODOS_V1', []);

    const [openModal,setOpenModal] = React.useState(false);

    const [searchValue, setSearchValue] = React.useState('');
    const totalTodos = todos.length;
    const completedTodos = todos.filter(Todos => Todos.completed === true);
    let searchedTodos = [];

    if (searchValue.length > 1) {
        let searchedLowerCase = searchValue.toLocaleLowerCase();
        searchedTodos = todos.filter(todo => todo.text.toLocaleLowerCase().search(searchedLowerCase) !== -1);
    } else {
        searchedTodos = todos;
    }

    const changeStateTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodoList = [...todos];
        if (newTodoList[todoIndex].completed === true) {
            newTodoList[todoIndex].completed = false;
        } else {
            newTodoList[todoIndex].completed = true;
        }
        saveTodos(newTodoList);
    }

    const deleteTodo = (text) => {
        const newTodoList = todos.filter(todo => todo.text !== text);
        saveTodos(newTodoList);
    }

    const addTodo = (text) =>{
        const newTodoList = [...todos];
        newTodoList.push({text:text,completed:false});
        saveTodos(newTodoList);
    }

    // console.log('Render (antes del useEfect)');

    // React.useEffect(() => {
    //   console.log('usando el useEffect');
    // }, [totalTodos]);

    // console.log('Despues Despues del useEfect');

    const args = { total: totalTodos, completed: completedTodos.length };

    return (
        <TodoContext.Provider value={{
            loading,
            error,
            args,
            searchValue,
            setSearchValue,
            searchedTodos,
            changeStateTodo,
            deleteTodo,
            openModal,
            setOpenModal,
            addTodo,
        }}>
            {props.children}

        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider };
