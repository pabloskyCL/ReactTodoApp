import React from 'react';

function TodoList(props) {
    return (
            <div className="row">
                <div className="col s12 m2 5"></div>
                <div className="col s12 m8 20">
                    <ul className="collection item-list">
                        {props.children}
                    </ul>
                </div>
                <div className="col s12 m2 5"></div>
            </div>
    );
}

export { TodoList };