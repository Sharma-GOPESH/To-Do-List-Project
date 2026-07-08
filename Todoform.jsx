import {useState ,useEffect, useRef} from "react"
import "./App.css"
import { useContext } from "react"
import Contextprovider, { Addcontext } from "./Context.jsx"
import TodoItem from "../react-learning/src/assets/todoitem.jsx"
function TodoForm(){
const [todo , settodo] =useState("")
const {addTodo,toggleTodo ,deleteTodo,editTodo} = useContext(Addcontext)
const add =(e)=>{
  e.preventDefault()
  if(!todo) return
  addTodo(todo)
  settodo("")
}

  return(
  <>
  <h1>TO DO LIST</h1>
  <form onSubmit={add}>
 <div id="todoform" >
  <input type="text" id="inpt" placeholder="Write Your Tasks Here..." value={todo}
  onChange={(e)=>settodo(e.target.value)}></input>
  <button type="submit" id="btn">ADD</button>
 </div>
 </form>
  </>
  )
}
export default TodoForm