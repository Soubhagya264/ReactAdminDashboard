import logo from './logo.svg';
import './App.css';
import Topbar from './components/Topbar/Topbar';
import SideBar from './components/Sidebar/Sidebar';
import UserList from './Pages/UserList/UserList';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './Pages/home';

function App() {
  return (
    <>
    <Topbar />
    <div className="container">
    <SideBar />
    <div className="others">
      <Router>
        <Routes>
       
          <Route path="/" element={<Home/>} />
          <Route path="/users" element={<UserList/>} />
        
        </Routes>
      </Router>
      </div>
      </div>
      

    </>
  );
}

export default App;
