import React, { Children, createContext, useState } from "react";
// import Api from '../../utils/Api';

export const UserContext = createContext();
export const ToDoContext = createContext();
// const api = new Api('http://localhost:3000');

// export function ToDoProvider() {
//     const [toDos, setToDo] = useState([]);

//     const handleNewToDo = (toDo) => {
//         api.postToDo(toDo)
//         .then(res => {
//           setToDo([...toDos, res])
//         })
//     };

//     const handleClickDelete = (toDo) => {
//         api.deleteToDo(toDo._id)
//         .then(res => {
//             setToDo(toDos.filter(item => item._id !== toDo._id));
//             // setCompleteList(toDos.filter(item => item._id !== toDo._id));
//         })
//         .catch(err => console.log(err));
//     };

//     const handleClickChangeToDo = (toDo) => {
//         api.putToDo(toDo)
//       };

//     const handleClickComplete = toDo => {
//     toDo.completed = true;
//     api.completeToDo(toDo)
//     .then(res => {
//         setToDo(toDos.filter(item => item._id !== toDo._id));
//         // setCompleteList(toDos);
//     })
//     .catch(err => console.log(err));
//     };

//     return (
//         <ToDoContext.Provider value={{ toDos, handleNewToDo, handleClickDelete, handleClickChangeToDo, handleClickComplete }}>
//             {Children};
//         </ToDoContext.Provider>
//     )
// };