import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import About from './Pages/About'
import Grievanceform from './Pages/Grievanceform'
import Auth from './Dashboard/Auth'
import Herodashboard from './Dashboard/Herodashboard'
import Footer from './Components/Footer'

function App() {

  return (
    <>
   
     <Routes>
      <Route element={<Home/>} path='/' />
      <Route element={<About/>} path='/about' />
      <Route element={<Grievanceform/>} path='/grievanceForm' />
      <Route element={<Auth/>} path='/login' />
      <Route element={<Auth insideRegister={true} />} path='/register' />
      <Route element={<Herodashboard/>} path='/herodashboard' />
      <Route element={<Footer/>} path='/contact' />

     </Routes>

     

    </>
  )
}

export default App
