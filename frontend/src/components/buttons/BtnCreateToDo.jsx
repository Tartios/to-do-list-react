import React from "react";

export default function BtnCreateToDo ({ handleSubmit,  btnValue}) {
    return (        
        <button className="service__button" type="submit" onClick={handleSubmit} >{btnValue}</button>
    )
}