import '../App.css';
import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import Header from './Header'
import ToDoList from './ToDoList';
import CompletedList from './CompletedList';
import SignIn from './auth/Signin';
import SignUp from './auth/Signup';
import ProtectedRoute from './ProtectedRoute';
import Api from '../utils/Api';
import { auth, getContent, register } from './auth/Auth';
import { ToDoContext } from './context/AppContext';


const api = new Api('http://localhost:3000');
function App() {

const history = useHistory();

const tokenCheck = () => {
  if(localStorage.getItem("jwt")) {
    const jwt = localStorage.getItem("jwt");
    getContent(jwt)
    .then((res) => {
      if(res) {
        const userData = {
          userName: res.userName,
          email: res.email,
        }
        setUserData(userData);
        setLoggedIn(true);
        history.push("/");
      }
    })
  }
};
useEffect(() => {
  tokenCheck();
}, []);

  // ========== USER ========== //

  const [userData, setUserData] = useState({});

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

  const handleSignIn = (userName, password) => {
    auth(userName, password)
    .then((data) => {
      if (data.token) {
        localStorage.setItem("jwt", data.token);
        setUserData({
          userName: data.UserName,
          password: data.password,
        })
        setLoggedIn(true);
        history.push('/');
      }
    })
    .catch(err => console.log(err));
  };

  const handleSignUp = (userName, email, password) => {
    register(userName, email, password)
    .then((data) => {
      setUserData({
        userName: data.userName,
        email: data.email,
        password: data.password,
      })
      .catch(err => console.log(err));
      setLoggedIn(true);
      history.push('/');
    })
  };

  const signOut = () => {
    localStorage.removeItem("jwt");
    history.push('/signin');
  };
  
  return (
    <div className="main">
      <ToDoContext.Provider value={toDos}>
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
          <SignIn handleSignIn={handleSignIn} />
        </Route>
        <Route path="/signup">
          <SignUp handleSignUp={handleSignUp} />
        </Route>
        <Route>
          {loggedIn ? <Redirect to="/completed" /> : <Redirect to="/signin" />}
        </Route>
        <Route>
          {loggedIn ? <Redirect to="/" /> : <Redirect to="/signin" />}
        </Route>
      </Switch>
      </ToDoContext.Provider>
    </div>
  );
}

export default App;
