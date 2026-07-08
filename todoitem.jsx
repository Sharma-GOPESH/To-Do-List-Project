import {useState ,useEffect, useRef} from "react"
import "./App.css"
import { useContext } from "react"
import Contextprovider, { Addcontext } from "./Context.jsx"
import TodoForm from "./Todoform.jsx"
function TodoItem({todo}){
  const {todos,editTodo,deleteTodo,toggleTodo} = useContext(Addcontext)
  const[istodoeditable , settodoeditable] = useState(false)
  const [todomsg , settodomsg] = useState(todo.todo)

  const edit = ()=>{
  editTodo(todo.id ,{...todo , todo:todomsg})
  settodoeditable(false)
  }

  const toggle=()=>{
    toggleTodo(todo.id)
  }

  return( 
  <>
 <div id="Todolist" key={todo.id}>
    <input type="checkbox" id="toggle" checked={todo.checked} onChange={toggle} ></input>
    <input type="text" id="inpt_2" value={todomsg} readOnly={!istodoeditable} onChange={(e)=>{settodomsg(e.target.value)}} style={{textDecoration:todo.checked?"line-through":"none",
      textDecorationColor:"red",
      textDecorationThickness: "2px"
    }}
    ></input> 
    <button id="edit"  onClick={()=>{
      if(todo.checked) return
      if(istodoeditable) edit();
      else{settodoeditable((prev)=>!prev)}
    }}
    style={{backgroundColor:istodoeditable?"green":"red" ,
      color:istodoeditable?"black":"white"
    }}
    disabled={todo.checked}>EDIT</button>
     <button id="delete" onClick={()=>{deleteTodo(todo.id)}}>DELETE</button>
 </div>
  </>
  )
}
export default TodoItem