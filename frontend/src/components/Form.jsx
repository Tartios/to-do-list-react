import React, {useState} from 'react';
import BtnCreateToDo from './buttons/BtnCreateToDo';


export default function Form(props) {

    
  const [inputValue, setInputValue] = useState('');
  const handleInputValue = (e) => {
  setInputValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleNewToDo(inputValue);
    setInputValue('');
  };
    return (
        <form action='#' className='service'>
            <input type="text" onChange={handleInputValue} className="serviсe__input" value={inputValue} />
            {/* <button className="service__button" type="submit" onClick={handleSubmit} >{props.bntValue}</button> */}
            <BtnCreateToDo handleSubmit={handleSubmit} btnValue={props.btnValue} />
        </form>
    )
}