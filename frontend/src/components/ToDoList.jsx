import React from "react";
import ToDo from './ToDo';
import Form from "./Form";

export default function ToDoList({ toDos, handleClickDelete, handleClickComplete, handleClickChangeToDo, handleNewToDo }) {
    
    return (
        <>
            <Form bntValue="Добавить" handleNewToDo={handleNewToDo} />
            <div className="to-do-list">
                {toDos.map(toDo => toDo.completed === false ? <ToDo id={toDo._id} key={toDo._id} toDo={toDo} value={toDo.toDo} handleClickDelete={handleClickDelete} handleClickComplete={handleClickComplete} handleClickChangeToDo={handleClickChangeToDo} /> : null)}
            </div>
        </>
    );
}