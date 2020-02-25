import React, { useState } from 'react';
import { connect } from 'react-redux';
import { v4 } from 'uuid';

function NewToDo(props) {
    const [description, setDescription] = useState('');
    function handleFormSubmission(event) {
        console.log(props);
        event.preventDefault();
        const action = {
            type: 'ADD_ITEM',
            item: {
                description,
                completed: false,
                id: v4(),
            },
        };
        props.dispatch(action);
        setDescription('');
    }
    return (
        <form onSubmit={handleFormSubmission}>
            <h2>Hello</h2>
            <input
                placeholder="What up"
                value={description}
                onChange={e => setDescription(e.target.value)}
            />
            <button type="submit">Add</button>
        </form>
    );
}

NewToDo = connect()(NewToDo);

export default NewToDo;
