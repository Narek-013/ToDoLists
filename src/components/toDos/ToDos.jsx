import { useRef } from "react";
import FooterToDo from "../FooterToDo/FooterToDo";
import ToDoHeader from "../toDoHeader/ToDoHeader";
import ToDoItems from "../toDoItems/ToDoItems";

import './toDos.css'

const ToDos = () => {


    return (
      <div>
        <ToDoHeader  />
        <ToDoItems />
        <FooterToDo />
      </div>
    );
}

export default ToDos;