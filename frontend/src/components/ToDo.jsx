import React, {useState} from 'react';
import BtnDeleteToDo from './buttons/BtnDeleteToDo';
import BtnCompleteToDo from './buttons/BtnCompleteToDo';
import BtnEditToDo from './buttons/BtnEditToDo';
import BtnEditToDoHandleSubmit from './buttons/BtnEditToDoHandleSubmit';

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

    // function handleDragStart (e, toDo) {
    //     console.log('drag-start');
    // }

    // function handleDragEnd (e) {

    // }

    // function handleDragOver(e) {
    //     e.preventDefault();

    // }

    // function handleDragDrop (e) {
    //     e.preventDefault();
    //     console.log('drop');

    // }

    return (        
        <div
        className="card"
        id={id}
        // draggable="true"
        // onDragStart={handleDragStart(e, toDo)}
        // onDragLeave={handleDragEnd(e)}
        // onDragEnd={handleDragEnd(e)}
        // onDragOver={handleDragOver(e)}
        // onDrop={handleDragDrop(e, toDo)}
        >
            <p className="card__text">{value}
            </p>
            <div className="card__edit-block">
                <input className="card__edit-todo" type="text" onChange={handleInputValue} value={inputValue} />
                <BtnEditToDoHandleSubmit onEditSubmit={onEditSubmit} value={"ок"} />
            </div>
            <div className="card__buttons">
                { toDo.completed === false ? <BtnEditToDo onEdit={onEdit} /> : null}
                <BtnDeleteToDo onDelete={onDelete} style={ toDo.completed === false ? "card__delete-button" : null} value="X" />
                { toDo.completed === false ? <BtnCompleteToDo onComplete={onComplete} /> : null}
            </div>
        </div>
    );
}