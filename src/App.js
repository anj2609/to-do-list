import React from "react";
import Header from './components/Header'; 
import Todoitem from './components/Todoitem';
import Button from "./components/Button";
import "./style.css";
const App= () =>{
  return (
    <div className="todo-container">
      <Header/>
      <Todoitem text="Eat"/>
      <Todoitem text="Study"/>
      <Todoitem text="Sleep"/>
      <Todoitem text="Read"/>
      <Todoitem text="write"/>
      <Button/>
    </div>
  );
};

export default App;