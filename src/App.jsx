import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SearchComponent from "./pages/AutoCompleteSearchBar/SearchComponent";
import SearchTest from "./pages/AutoCompleteSearchBar/SearchTest";
import Products from "./pages/Products/Products";
import Test from "./pages/AutoCompleteSearchBar/SearchTest";
import Counter from "./pages/Counter";
import TabForm from "./pages/TabForm";
import Quote from "./pages/Quote/Quote";
// import Navbar from "./components/NavBar";
import SimpleCRUD from "./pages/React-UseStateHook/SimpleCRUD";

function App() {
  return (
    <Router>
      <Navbar />
      <hr style={{ height: "5px", backgroundColor: "#000"}} />
      <Routes>
        <Route path="/" element={<div>Welcome to Home Page</div>} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/crud" element={<SimpleCRUD />} />
        <Route path="/products" element={<Products />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/search-component" element={<SearchComponent />} />
        <Route path="/search-test" element={<SearchTest />} />
        <Route path="/tab-form" element={<TabForm />} />
      </Routes>
    </Router>
  );
}

export default App;


import { NavLink } from "react-router-dom";
const navStyle = {
  marginRight: "1rem",
  textDecoration: "none",
  fontWeight: "bold",
  color: "#333"
};


const  Navbar=()=> {
  return (
    <nav style={{ padding: "1rem", backgroundColor: "#f2f2f2" }}>
      <NavLink to="/" style={navStyle}>Home</NavLink>
      <NavLink to="/counter" style={navStyle}>Counter</NavLink>
      <NavLink to="/crud" style={navStyle}>UseState CRUD</NavLink>
      <NavLink to="/products" style={navStyle}>Products</NavLink>
      <NavLink to="/quote" style={navStyle}>Quote</NavLink>
      <NavLink to="/search-component" style={navStyle}>SearchComponent</NavLink>
      <NavLink to="/search-test" style={navStyle}>SearchTest</NavLink>
      <NavLink to="/tab-form" style={navStyle}>TabForm</NavLink>
    </nav>
  );
}
