import React from "react";
import ToDo from './ToDo';

export default function ToDoList({toDos, handleClickComplete}) {
    
    return (
        <div className="to-do-list">
            {toDos.map(toDo => <ToDo id={toDo._id} key={toDo._id} toDo={toDo} value={toDo.toDo} handleClickComplete={handleClickComplete} />)}
        </div>
    );
}