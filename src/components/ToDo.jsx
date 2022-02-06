import React from 'react';

export default function ToDo(props) {
    function onComplete () {
        props.onComplete()
    };
    return (        
        <div className="card">
            <p className="card__text">{props.value}</p>
            <button className="card__complete-button" onClick={onComplete}>Завершить</button>
        </div>
    );
}