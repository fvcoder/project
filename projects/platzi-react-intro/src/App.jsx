import './App.css'
import { TodoCounter } from "./components/todoCounter"
import { TodoSearch } from "./components/todoSearch"
import { TodoList } from "./components/todoList"
import { TodoItem } from './components/todoItem'

function App() {
  return (
    <div className="App">
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </TodoList>
    </div>
  )
}



export default App
