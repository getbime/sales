import * as React from 'react';
import './App.css';
import Registration from './component/Registration/Registration'
import Login from './component/Login/Login'
import { HashRouter, Routes, Route} from 'react-router-dom'
import Dashboard from './component/Dashboard/Dashboard';
import ForgetPassword from './component/ForgetPassword/ForgetPassword';
import ChangePassword from './component/ForgetPassword/ChangePassword'


function App() {
  
  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route index element={<Registration />}/>
          <Route path='login' element={<Login /> }/>
          <Route path='uy6hkPfpmHHWSaGUpr6X9UMN4WCQUx' element={<ChangePassword/>}/>
          <Route path='forget-password' element={<ForgetPassword /> }/>
          <Route path='dashboard/*' element={<Dashboard />}/>
        </Routes>
      </div>
    </HashRouter> 
    
  );
}


export default App;
