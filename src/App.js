import React from 'react'
import Login from './screens/Login'
import Register from './screens/Register';
import{ Route,Routes} from "react-router-dom"
function App() {
  return (

    <Routes>
    <Route path="/"element={<Login/>} />
    <Route path='/Register' element={<Register/>}/>
    </Routes>

    
  );
}

export default App