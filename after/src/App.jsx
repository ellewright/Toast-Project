import { useRef, useState } from 'react'
import './App.css'
import useToast from './components/useToast'

function App() {
  const inputRef = useRef(null)
  const [id, setId] = useState()
  const { addToast, removeToast } = useToast()

  function createToast() {
    if (inputRef.current.value == null || inputRef.current == null) return
    setId(addToast(inputRef.current.value, { autoDismissTimeout: 1000 }))
  }

  return (
    <div className="form">
      <input type="text" ref={inputRef} />
      <button onClick={createToast}>Add</button>
      <button onClick={() => id != null && removeToast(id)}>Remove Newest</button>
    </div>
  )
}

export default App
