import { useState } from 'react'
import './App.css'
import Header from './compoents/Header/Header'
import Shops from './compoents/Shops/Shops'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header></Header>
      <Shops></Shops>
    </div>
  )
}

export default App
