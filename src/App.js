import logo from './logo.svg';
import './App.css';
import Topbar from './components/Topbar/Topbar';
import SideBar from './components/Sidebar/Sidebar';
import UserList from './Pages/UserList/UserList';
import NewUser from './Pages/newUser/NewUser';
import ProductList from './Pages/productList/ProductList';
import Product from "./Pages/Product/Product";
import NewProduct from "./Pages/newProduct/NewProduct";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import User from './Pages/User/User';
import Home from './Pages/home';

function App() {
  return (
    <>
      <Router>
        <Topbar />
        <div className="container">
          <SideBar />
          <div className="others">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/users" element={<UserList />} />
              <Route path="/user/:id" element={<User />} />
              <Route path="/newUser" element={<NewUser />} />
              <Route path="/products" element={<ProductList />} />
              <Route path="/product/:id" element={<Product />} />
              <Route path="/newProduct" element={<NewProduct />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
