import {useEffect, useState} from "react"
import { useContext } from "react"
import "./App.css"
import TodoForm from "./Todoform.jsx"
import  Contextprovider , { Addcontext } from "./Context.jsx"
import TodoItem from "./todoitem.jsx"

function App(){
      const {todos , settodos}= useContext(Addcontext)
    return(
        <>
        <TodoForm/>
        <div>
            {todos.map((todos)=>(
                <div key={todos.id}>
                    <TodoItem todo={todos}/>
                    </div>
                    ))}
        </div>
        
        </>
    )
}
export default App