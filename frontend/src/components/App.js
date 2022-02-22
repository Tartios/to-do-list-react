import '../App.css';
import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './Header'
import ToDoList from './ToDoList';
import CompletedList from './CompletedList';
import SignIn from './auth/Signin';
import SignUp from './auth/Signup';
import ProtectedRoute from './ProtectedRoute';
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

  // =============== AUTH ===============

  const [loggedIn, setLoggedIn] = useState(true);


  
  return (
    <div className="main">
      <Header />
      <Switch>
        <ProtectedRoute
          path="/completed"
          loggedIn={loggedIn}
          component={CompletedList}
          toDos={completeList}
          handleClickDelete={handleClickDelete}
        />
        <ProtectedRoute
          path="/"
          exact
          loggedIn={loggedIn}
          component={ToDoList}
          toDos={toDos}
          handleClickDelete={handleClickDelete}
          handleClickComplete={handleClickComplete}
          handleClickChangeToDo={handleClickChangeToDo}
          handleNewToDo={handleNewToDo}
        />
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route>
          {/* <CompletedList toDos={completeList} handleClickDelete={handleClickDelete} /> */}
          {loggedIn ? <Redirect to="/completed" /> : <Redirect to="/signin" />}
        </Route>
        <Route>
          {/* <ToDoList toDos={toDos} handleClickDelete={handleClickDelete} handleClickComplete={handleClickComplete} handleClickChangeToDo={handleClickChangeToDo} /> */}
          {loggedIn ? <Redirect to="/" /> : <Redirect to="/signin" />}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
