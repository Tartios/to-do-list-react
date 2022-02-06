import React from "react";
import ToDo from './ToDo';

export default function ToDoList({toDos, handleClickComplete}) {
    return (
        <div className="to-do-list">
            {toDos.map(toDo => <ToDo id={toDo.id} key={toDo.id} toDo={toDo} value={toDo.value} handleClickComplete={handleClickComplete} />)}
        </div>
    );
}