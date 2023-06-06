import './App.css'

function App() {
  return (
    <>  
    <TodoItem />
    <TodoItem />
    <TodoItem />
    <TodoItem />
    </>
  )
}

function TodoItem() {
  return (
    <li>
      <span>v</span>
      <p>hola tarea</p>
      <span>x</span>
    </li>
  )
}

export default App
