import React from 'react';
import "./TodoItem.css";

function TodoItem(props) {

    let iconStatus = props.completed ? "check" : "incomplete_circle";
    let textStyle = props.completed ? "todo-completed" : "";
    return (<li className="collection-item">
        <div className="row">
            <div className='col s2'><button className="btn-floating waves-effect" onClick={props.onChangeStateTodo}><i className="material-icons">{iconStatus}</i></button></div>
            <div className="col s9"><p className={textStyle}>{props.text}</p></div>
            <div className="col s1"><button className="btn-floating waves-effect red" onClick={props.onDeleteTodo}><i className="material-icons">close</i></button></div>
        </div>
    </li>);
}

export { TodoItem };