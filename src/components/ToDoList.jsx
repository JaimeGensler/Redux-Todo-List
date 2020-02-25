import React from 'react';
import { connect } from 'react-redux';

export default function ToDoList(props) {
    function handleClick1(id) {
        props.dispatch({ type: 'UNCHECK_ITEM', id });
    }
    function handleClick2(id) {
        props.dispatch({ type: 'CHECK_ITEM', id });
    }
    return (
        <div>
            {Object.keys(props.list).map(key => {
                if (props.list[key].completed) {
                    return (
                        <li onClick={() => handleClick1(key)}>
                            <strike>{props.list[key].description}</strike>
                        </li>
                    );
                } else {
                    return (
                        <li onClick={() => handleClick2(key)}>
                            {props.list[key].description}
                        </li>
                    );
                }
            })}
        </div>
    );
}

ToDoList = connect()(ToDoList);
