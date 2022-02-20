import React from "react";

export default function BtnCreateToDo ({ handleSubmit,  bntValue}) {
    return (        
        <button className="service__button" type="submit" onClick={handleSubmit} >{bntValue}</button>
    )
}