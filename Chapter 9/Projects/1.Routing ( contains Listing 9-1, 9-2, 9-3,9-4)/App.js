import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Menu from "./Menu";
import Food from "./Food";
import Contact from "./Contact";
const ulStyle = {
  listStyleType: "none",
  fontSize: "22px",
  overflow: "hidden"
};
const liStyle = {
  float: "left",
  "padding-left": "20px"
};
export default function App() {
  return (
    <BrowserRouter>
      <ul style={ulStyle}>
        <li style={liStyle}>
          <Link to="/">Menu</Link>
        </li>
        <li style={liStyle}>
          <Link to="/Food">Order Food</Link>
        </li>
        <li style={liStyle}>
          <Link to="/Contact">Contact Us</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<Menu />}></Route>
        <Route path="/Food" element={<Food />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
