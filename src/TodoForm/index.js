import React from "react";
import { TodoContext } from "../TodoContext";


function TodoForm(){

    const [newTextTodo, setNewTextTodo] = React.useState('');
    const {setOpenModal, addTodo} = React.useContext(TodoContext)

    const onChangeText = (event) => {
        setNewTextTodo(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTextTodo);
        setOpenModal(false);
    }

    return(
        <form onSubmit={onSubmit}>
                <div className="row">
                    <h5 className="modalTitle">agrega una nuevo TO DO</h5>
                </div>
                <div className="row">
                    <div className="col l2"></div>
                <div className="col l8">
                    <textarea placeholder='que haras en tu tarea' value={newTextTodo} onChange={onChangeText} className="materialize-textarea" />
                </div>
                <div className="col l2"></div>
                </div>
                <div className="row">
                    <div className="col l6 addTodoContainer">
                        <button type="submit" className="btn" >agregar</button>
                    </div>
                    <div className="col l6 cancelAddTodoContainer">
                        <button className="btn red darken-1" onClick={() => {setOpenModal(false)}}>cancelar</button>
                    </div>
                </div>
            </form>
    )
}

export { TodoForm };