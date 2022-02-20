import React from "react";

export default function BtnCompleteToDo ({ onComplete }) {
    return (        
        <button title="Завершить" className="card__complete-button" onClick={onComplete}></button>
    )
}