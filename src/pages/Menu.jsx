
import React  from "react";


const Menu = ({menuItems}) => {
 

  return (
    <div className='container my-2' style={{color : "darkorange"}}>
      <h2>All Menu Items</h2>
      <div className='container d-flex flex-wrap gap-3'>
      {menuItems.length === 0 ? <p className="mt-5 fs-2">Loading menu...</p> :
        menuItems.map((menu, id) => {
          return (
            <div key={id} className="card" style={{ width: "18rem" }}>
              <img src={menu.strMealThumb} alt="" />
              <div class="card-body">
                <h5 class="card-title" style={{color:"darkorange"}}>{menu.strMeal}</h5>
                <p>{menu.strInstructions.slice(0,50)}...</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;