import '../App.css';
import React, {useState, useEffect} from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header'
import Form from './Form';
import ToDoList from './ToDoList';
import CompletedList from './CompletedList'
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

  const [completeList, setCompleteList] = useState([]);

  useEffect(() => {
    api.getToDo()
    .then(res => setCompleteList(res.data))
  }, []);

  const handleNewToDo = (toDo) => {
    api.postToDo(toDo)
    .then(res => {
      setToDo([...toDos, res])
    })
  };
  
  const handleClickDelete = (toDo) => {
    api.deleteToDo(toDo._id)
    .then(res => {
      setToDo(toDos.filter(item => item._id !== toDo._id));
      setCompleteList(toDos.filter(item => item._id !== toDo._id));
    })
    .catch(err => console.log(err));
  };

  const handleClickChangeToDo = (toDo) => {
    api.putToDo(toDo)
  }

  const handleClickComplete = toDo => {
    toDo.completed = true;
    api.completeToDo(toDo)
    .then(res => {
      setToDo(toDos.filter(item => item._id !== toDo._id));
      setCompleteList(toDos);
    })
    .catch(err => console.log(err));
  }

  return (
    <div className="main">
      <Header />
      <Form bntValue="Добавить" handleNewToDo={handleNewToDo} />
      <Switch>
        <Route path="/completed">
          <CompletedList toDos={completeList} handleClickDelete={handleClickDelete} />
        </Route>
        <Route path="/">
          <ToDoList toDos={toDos} handleClickDelete={handleClickDelete} handleClickComplete={handleClickComplete} handleClickChangeToDo={handleClickChangeToDo} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
