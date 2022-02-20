import React from "react";

export default function BtnEditToDoHandleSubmit ({ onEditSubmit, value }) {
    return (
        <button className="card__edit-submit" onClick={onEditSubmit}>{value}</button>
    )
}