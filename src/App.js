import './App.css';
import Header from './component/Header/Header';
import MainBody from './component/MainBody/MainBody';
import Nav from './component/Nav/Nav'

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="right-con">
        <Header />
        <MainBody />
      </div>
    </div>
  );
}

export default App;
