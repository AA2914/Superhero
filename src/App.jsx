
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'

function App() {

  return (
    <>
     <Routes>
      <Route element={<Home/>} path='/' />
     
     </Routes>
    </>
  )
}

export default App
