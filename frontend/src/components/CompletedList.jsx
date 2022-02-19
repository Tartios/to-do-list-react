import React from "react";
import ToDo from "./ToDo";

export default function CompletedList ({ toDos, handleClickDelete }) {
    return (
        <div className="to-do-list">
        {
            toDos.map(toDo => toDo.completed === true ? <ToDo id={toDo._id} key={toDo._id} toDo={toDo} value={toDo.toDo} handleClickDelete={handleClickDelete} /> : null)
        }
        </div>
    )
}