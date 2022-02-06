import React, {useState} from 'react';


export default function Form(props) {

    
  const [inputValue, setInputValue] = useState('');
  const handleInputValue = (e) => {
  setInputValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleNewToDo(inputValue);
  };
  
    return (
        <form action='#' className='service'>
            <input type="text" onChange={handleInputValue} className="serviсe__input" value={inputValue} />
            <button className="service__button" type="submit" onClick={handleSubmit} >{props.bntValue}</button>
        </form>
    )
}