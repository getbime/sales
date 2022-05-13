import * as React from 'react';
import './App.css';
import Header from './component/Header/Header';
import MainBody from './component/MainBody/MainBody';
import Nav from './component/Nav/Nav'
import StatSec from './component/StatSection/StatSec';
import TogleNav from './component/TogleNav/TogleNav'
import Footer from './component/Footer/Footer'
import Registration from './component/Registration/Registration'
import Login from './component/Login/Login'
import ForgetPassword from './component/ForgetPassword/ForgetPassword'
import SalesRecord from './component/SalesRecord/SalesRecord'
import Viewdata from './component/ViewData/ViewData'
import { BrowserRouter, Routes, Route } from 'react-router-dom'




function App() {
  const [state, setState] = React.useState({
    left: false,
  });

  
  return (
    <BrowserRouter>
      <div className="App">
            <TogleNav setState={setState} state={state}/>        
            <Nav className="nav"/>

            <div className="right-con">
              <Header setState={setState} state={state}/>

              <Routes>
                <Route path='/'  element={<div>
                    <MainBody />
                    <StatSec/>
                  </div>} />

                <Route path='/register' element={<Registration />}/>
                <Route path='/login' element={<Login /> }/>
                <Route path='/forget-password' element={<ForgetPassword /> }/>
                <Route path='/sales-record' element={<SalesRecord />  }/>
                <Route path='/view-data' element={<Viewdata />  }/>

              </Routes>
              
              <Footer />
            </div>

          
      </div>

    </BrowserRouter> 
    
  );
}

export default App;
