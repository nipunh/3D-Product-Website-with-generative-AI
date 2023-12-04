import { useState } from 'react'
import Canvas from './Canvas/'
import Customizer from './Pages/Customizer'
import Home from './Pages/Home'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='app transition-all ease-in'>
      <Home />
      <Canvas />
      <Customizer />
    </main>
  )
}

export default App
