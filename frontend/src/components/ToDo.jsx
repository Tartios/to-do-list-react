import React from 'react';

export default function ToDo({id, value, toDo, handleClickComplete, handleClickChangeToDo}) {
    function onComplete () {
        handleClickComplete(toDo);
    };
    function onEdit () {
        handleClickChangeToDo(toDo);
    }
    return (        
        <div className="card" id={id}>
            <p className="card__text">{value}</p>
            <div className='card__buttons'>
                <button className="card__edit-button" onClick={onEdit}></button>
                <button className="card__complete-button" onClick={onComplete}></button>
            </div>
        </div>
    );
}