import React from 'react';

export default function ToDo({id, value, toDo, handleClickComplete}) {
    function onComplete () {
        handleClickComplete(toDo);
    };
    return (        
        <div className="card" id={id}>
            <p className="card__text">{value}</p>
            <button className="card__complete-button" onClick={onComplete}>Завершить</button>
        </div>
    );
}