import logo from './logo.svg';
import './App.css';
import {Header} from "./MyComponents/Header";
import Todos from "./MyComponents/Todos";
import AddTodo from "./MyComponents/AddTodo";
import Footer from "./MyComponents/Footer"; 
import React, { useState } from 'react';

function App() {
   const onDelete = (todo)=>{
    console.log("I am onDelete", todo);

    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
   }

   const addTodo = (title,desc)=>{
      console.log("I am adding thid todo", title, desc);
      let sno = todos[todos.length-1].sno + 1;
      const myTodo = {
        sno: sno,
        title: title,
        desc: desc,
      }
      setTodos([...todos, myTodo]);
      console.log(myTodo);
   }

  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Go to the market",
      desc: "You need to go to the market to get this job done1"
    },
     {
      sno: 2,
      title: "Go to the mall",
      desc: "You need to go to the market to get this job done2"
    },
     {
      sno: 3,
      title: "Go to the Gym",
      desc: "You need to go to the market to get this job done3"
    },
  ]);

  return (
    <>
      <Header />
      <AddTodo addTodo={addTodo}/>
      <Todos Todos={todos} onDelete={onDelete}/>
      <Footer />
    </>
  );
}

export default App;

 