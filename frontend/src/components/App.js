import '../App.css';
import React, {useState, useEffect} from 'react';
import Form from './Form';
import ToDoList from './ToDoList';
import Api from '../utils/Api';

const api = new Api('http://localhost:3000')

function App() {
  // ========== TO DO ========== //
  const [toDos, setToDo] = useState([]);

  useEffect(() => {
    api.getToDo()
    .then(res => {
      setToDo(res.data);
    })
  }, []);

  const handleNewToDo = (toDo) => {
    api.postToDo(toDo)
    .then(res => {
      setToDo([...toDos, res])
    })
  };
  
  const handleClickComplete = (toDo) => {
    api.deleteToDo(toDo._id)
    .then(res => {
      setToDo(toDos.filter(item => item._id !== toDo._id));
    })
    .catch(err => console.log(err));
  };

  const handleClickChangeToDo = (toDo) => {
    api.putToDo(toDo);
  }

  return (
    <div className="main">      
      <Form bntValue="Добавить" handleNewToDo={handleNewToDo} />
      <ToDoList toDos={toDos} handleClickComplete={handleClickComplete} handleClickChangeToDo={handleClickChangeToDo} />
    </div>
  );
}

export default App;
