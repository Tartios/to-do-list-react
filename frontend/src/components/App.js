import '../App.css';
import React, {useState, useEffect} from 'react';
import Form from './Form';
import ToDoList from './ToDoList';

function App() {
  // ========== TO DO ========== //
  const [toDos, setToDo] = useState([
    {id: 1, value: "Привет"},
    {id: 2, value: "Я"},
    {id: 3, value: "Работаю"},
  ]);

  const handleNewToDo = (toDo) => {
    const id = Date.now();
    const newToDo = {id, value: toDo};
    setToDo([...toDos, newToDo]);
  }
  
  const handleClickComplete = (toDo) => {
    setToDo(toDos.filter(item => item.id !==toDo.id))
  }

  return (
    <div className="main">      
      <Form bntValue="Добавить" handleNewToDo={handleNewToDo} />
      <ToDoList toDos={toDos} handleClickComplete={handleClickComplete} />
    </div>
  );
}

export default App;
