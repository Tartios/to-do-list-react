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
        <form action='#'>
            <input type="text" onChange={handleInputValue} className="input" value={inputValue} />
            <button className={props.className} type="submit" onClick={handleSubmit} >{props.bntValue}</button>
        </form>
    )
}