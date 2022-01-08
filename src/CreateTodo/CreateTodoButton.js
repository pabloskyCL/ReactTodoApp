import React from 'react';
import "./CreateTodoButton.css";
import 'materialize-css/dist/css/materialize.css';
import 'materialize-css/dist/js/materialize.js';

function CreateTodoButton(props){

    const onClickButton = (msg) => {
        props.setOpenModal(true);
    }
    
    return (
        <div className="row add-to-do">
                <div className="col s12 m2 5"></div>
                    <div className="col s12 m8 20 add-button">
                        <button className="btn-floating btn modal-trigger" onClick={onClickButton} ><i className="material-icons" >add</i></button>
                    </div>
                <div className="col s12 m2 5"></div>
            </div>
    );
}

export { CreateTodoButton };