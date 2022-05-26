import React, { useContext } from "react";
import { PureToDo } from './ToDo';
import Form from "./Form";
import { ToDoContext } from "./context/AppContext";

export default function ToDoList({ handleClickDelete, handleClickComplete, handleClickChangeToDo, handleNewToDo }) {
    const toDos = useContext(ToDoContext);
    return (
        <>
            <Form btnValue="Добавить" handleNewToDo={handleNewToDo} />
    {!toDos.length ? <div className="to-do-list_empty">Кажется, у Вас сегодня нет важных дел</div> :
            <div className="to-do-list">
                {toDos.map(toDo => toDo.completed === false ? <PureToDo id={toDo._id} key={toDo._id} toDo={toDo} value={toDo.toDo} handleClickDelete={handleClickDelete} handleClickComplete={handleClickComplete} handleClickChangeToDo={handleClickChangeToDo} /> : null)}
            </div>}
        </>
    );
}