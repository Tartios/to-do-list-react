import React, {useState} from 'react';

export default function ToDo({id, value, toDo, handleClickDelete, handleClickComplete, handleClickChangeToDo}) {

    const [inputValue, setInputValue] = useState(value);

    function handleInputValue (e) {
        setInputValue(e.target.value);
    };

    function onComplete () {
        handleClickComplete(toDo);
    };
    
    function onDelete() {
        handleClickDelete(toDo);
    };

    function onEdit (e) {
        const input = e.target.closest('.card').querySelector('.card__edit-block');
        const text = e.target.closest('.card').querySelector('.card__text');
        input.classList.add('card__edit-block_active');
        text.classList.add('card__text_inactive');
        // handleClickChangeToDo(toDo);
    };

    function onEditSubmit (e) {
        const newToDo = toDo;
        newToDo.toDo = inputValue;
        handleClickChangeToDo(newToDo);
        const input = e.target.closest('.card').querySelector('.card__edit-block');
        const text = e.target.closest('.card').querySelector('.card__text');
        input.classList.remove('card__edit-block_active');
        text.classList.remove('card__text_inactive');
        text.textContent = inputValue;
    }
    return (        
        <div className="card" id={id}>
            <p className="card__text">{value}
            </p>
            <div className="card__edit-block">
                <input className="card__edit-todo" type="text" onChange={handleInputValue} value={inputValue} />
                <button className="card__edit-submit" onClick={onEditSubmit}>ок</button>
            </div>
            <div className='card__buttons'>
                <button title="Отредактировать" className="card__edit-button" onClick={onEdit}></button>
                <button title="Удалить" className="card__delete-button" onClick={onDelete}>X</button>
                <button title="Завершить" className="card__complete-button" onClick={onComplete}></button>
            </div>
        </div>
    );
}