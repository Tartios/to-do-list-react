import React from "react";
import ToDo from './ToDo';

export default function ToDoList({toDos, handleClickDelete, handleClickComplete, handleClickChangeToDo}) {
    
    return (
        <div className="to-do-list">
            {toDos.map(toDo => toDo.completed === false ? <ToDo id={toDo._id} key={toDo._id} toDo={toDo} value={toDo.toDo} handleClickDelete={handleClickDelete} handleClickComplete={handleClickComplete} handleClickChangeToDo={handleClickChangeToDo} /> : null)}
        </div>
    );
}