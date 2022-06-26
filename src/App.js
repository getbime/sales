import * as React from 'react';
import './App.css';
import Registration from './component/Registration/Registration'
import Login from './component/Login/Login'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Dashboard from './component/Dashboard/Dashboard';


function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route index element={<Registration />}/>
          <Route path='login' element={<Login /> }/>
          <Route path='dashboard/*' element={<Dashboard />}/>
        </Routes>
      </div>
    </BrowserRouter> 
    
  );
}


export default App;
