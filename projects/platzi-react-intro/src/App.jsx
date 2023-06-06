import './App.css'
import { TodoCounter } from "./components/todoCounter"
import { TodoSearch } from "./components/todoSearch"
import { TodoList } from "./components/todoList"
import { TodoItem } from './components/todoItem'
import { TodoAdd } from './components/todoAdd'
import React from 'react'

const tasks = [
  { text: "Estudiar React", completed: false },
  { text: "Tender Cama", completed: true },
  { text: "Comer", completed: false },
  { text: "Leer", completed: true }
]

function App() {
  return (
    <React.Fragment>
      <TodoCounter total={5} completed={2} />
      <TodoSearch />
      <TodoList>
        {tasks.map((todo) => <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>)}
      </TodoList>
      <TodoAdd />
    </React.Fragment>
  )
}



export default App
