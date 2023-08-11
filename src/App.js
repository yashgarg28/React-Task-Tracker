
import './App.css';
import Header from "./MyComponents/Header"
import { Todos } from './MyComponents/Todos';
import { Footer } from './MyComponents/Footer';
import React, { useState } from 'react';


function App() {
  const onDelete = (todo)=>{
    console.log("I am delete!", todo);
    setTodos(todos.filter((e)=>{
      return e!== todo;
    }))
  }
  const [todos, setTodos] = useState([
    {
    sr: 1,
    title : "Go to the market",
    desc: "You need to go to the market to get this job done!"
    },
    {
    sr: 2,
    title : "Go to the mall",
    desc: "You need to go to the mall to get this job done!"
    }, 
    {
    sr: 3,
    title : "Go to the ghat",
    desc: "You need to go to the ghat to get this job done!"
  } 
  ])
  return (
    <>
    <Header title="My ToDo List"/>
    <Todos todos={todos} onDelete={onDelete}/>
    <Footer/>
    </>
  );
}

export default App;
