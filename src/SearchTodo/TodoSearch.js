import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoSearch.css";

function TodoSearch() {

    const {setSearchValue} = React.useContext(TodoContext);
    const onChangeInput = (event) => {
        setSearchValue(event.target.value);
    }

    return (
        <div className="row">
            <div className="input-field col s4"></div>
            <div className="input-field col s4">
                <i className="material-icons prefix">search</i>
                <input placeholder="Buscar To Do" id="first_name" type="text" className="white-text" onChange={onChangeInput}/>
                <label className="search-lb active" htmlFor="first_name">Buscar</label>
            </div>
            <div className="input-field col s4"></div>
        </div>
    );
}

export { TodoSearch };