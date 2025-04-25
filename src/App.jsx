import React, { useEffect, useState } from "react";
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs';
import Menu from './pages/Menu';
import ContactUs from './pages/ContactUs';
import axios from "axios";

const App = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/search.php?f=b"
        );
        const data = res.data;
        setMenuItems(data.meals);
      } catch (err) {
        console.log("There is an error:", err);
      }
    };

    fetchData();
  }, []);

  console.log( "App Component : ", menuItems);
  


  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home menuItems = {menuItems} />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/menu' element={<Menu menuItems={menuItems} />} />
          <Route path='/contact' element={<ContactUs />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
