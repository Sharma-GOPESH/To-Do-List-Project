import {useState ,useEffect, useRef} from "react"
import "./App.css"
import { useContext } from "react"
import { createContext } from "react"

export const Addcontext = createContext({
  todos:[{}],
  addTodo : (todo)=>{},
  editTodo:(id , todo)=>{},
  deleteTodo :(id) =>{},
  toggleTodo :(id)=>{}

})
function Contextprovider(props){
    const [todos,settodos] = useState([
      {id:1 , todo:"todo message", checked:false}
    ])
    const addTodo = (todo)=>{
    settodos((prev) =>[{id:Date.now(),checked:false,todo} , ...prev])
}

  const editTodo = (id , todo)=>{
    settodos((prev)=> prev.map((prevtodo) => (prevtodo.id === id ? todo :prevtodo)))
   
  }
    const deleteTodo =(id) =>{
         settodos((prev)=> prev.filter((prevtodo) => (prevtodo.id !== id)))
        
    }
     const toggleTodo = (id) => { 
        settodos((prev)=> prev.map((prevtodo) => (prevtodo.id===id ?{...prevtodo, checked: !prevtodo.checked}:prevtodo)
     )
)
      }
      useEffect (()=>{
        const todos = JSON.parse(localStorage.getItem("todos"))
        if(todos){
            settodos(todos)
        }
      },[])
      useEffect(()=>{
        localStorage.setItem("todos" , JSON.stringify(todos))
      },[todos])
    return(
      <Addcontext.Provider value={{todos,settodos ,addTodo,editTodo,deleteTodo,toggleTodo}}>
        {props.children}
      </Addcontext.Provider>
    )
}

export default Contextprovider