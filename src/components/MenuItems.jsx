import React from "react";
import { Link } from "react-router-dom";

const MenuItems = ({menuItems}) => {
 

  const sliceMenu = menuItems.slice(0,4)

  console.log("MenuItems Components : ", sliceMenu);
  

  return (
    <div className="container my-5">

      <div className="d-flex justify-content-between mb-5">
        <h2 style={{color : "darkorange"}}>Menu Items</h2>
        <Link 
        className="fs-5" 
        to='/menu'>View All</Link>
      </div>

      <div className="d-flex justify-content-center gap-4 align-items-center">
      {sliceMenu.length === 0 ? <p className="mt-5 fs-2">Loading menu...</p> :
        sliceMenu.map((menu, id) => {
          return (
            <div key={id} className="card" style={{ width: "18rem" }}>
              <img src={menu.strMealThumb} alt="" />
              <div className="card-body">
                <h5 className="card-title" style={{color:"darkorange"}}>{menu.strMeal}</h5>
                <p>{menu.strInstructions.slice(0,50)}...</p>
              </div>
            </div>
          );
        })}
      </div>
      
    </div>
  );
};

export default MenuItems;
