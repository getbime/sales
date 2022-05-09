import * as React from 'react';
import './App.css';
import Header from './component/Header/Header';
import MainBody from './component/MainBody/MainBody';
import Nav from './component/Nav/Nav'
import StatSec from './component/StatSection/StatSec';
import TogleNav from './component/TogleNav/TogleNav'
import Footer from './component/Footer/Footer'
import Registration from './component/Registration/Registration'




function App() {
  const [state, setState] = React.useState({
    left: false,
  });

  
  return (
      <div className="App">
          <TogleNav setState={setState} state={state}/>        
          <Nav className="nav"/>

          <div className="right-con">
            <Header setState={setState} state={state}/>

            {/* <MainBody />
            <StatSec/> */}

            <Registration />
            <Footer />
          </div>

        
    </div>
    
  );
}

export default App;
