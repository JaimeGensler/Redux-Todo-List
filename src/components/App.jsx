import React from 'react';
import { connect } from 'react-redux';
import NewToDo from './NewToDo';
import ToDoList from './ToDoList';

function App(props) {
    return (
        <div>
            <NewToDo />
            <ToDoList list={props.toDoList} />
        </div>
    );
}

const mapStateToProps = state => {
    return {
        toDoList: state,
    };
};

export default connect(mapStateToProps)(App);
