import React from "react";
import ToDo from './ToDo';

export default function ToDoList({toDos}) {
    return (
        <div className="to-do-list">
            {toDos.map(toDo => <ToDo key={toDo.id} value={toDo.value} />)}
        </div>
    );
}