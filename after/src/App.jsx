import { useRef } from 'react'
import './App.css'
import useToast from './components/useToast'

function App() {
  const inputRef = useRef(null)
  const { addToast, removeToast, toasts } = useToast()

  console.log(toasts)

  function createToast() {
    if (inputRef.current.value == null || inputRef.current == null) return
    addToast(inputRef.current.value)
  }

  return (
    <div className="form">
      <input type="text" ref={inputRef} />
      <button onClick={createToast}>Add</button>
    </div>
  )
}

export default App
