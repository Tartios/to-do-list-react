import React from "react";

export default function BtnEditToDo ({ onEdit }) {
    return (
        <button title="Отредактировать" className="card__edit-button" onClick={onEdit}></button>        
    )
}