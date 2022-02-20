import React from "react";

export default function BtnDeleteToDo ({ onDelete, style, value }) {
    return (
        <button title="Удалить" className={style} onClick={onDelete}>{value}</button>
    )
}