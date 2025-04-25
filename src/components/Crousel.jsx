import React from 'react';
import burger from '../assets/static/burger.jpg';
import cake from '../assets/static/cake.jpg';
import pizza from '../assets/static/pizza.jpg';

const Crousel = () => {
  return (
    <div>
      <div id="carouselExampleAutoplaying" className="carousel slide bg-dark-subtle" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={cake} className="w-100 object-fit-contain" style={{ height: '450px' }} alt="cake" />
          </div>
          <div className="carousel-item">
            <img src={pizza} className="w-100 object-fit-contain" style={{ height: '450px' }} alt="pizza" />
          </div>
          <div className="carousel-item">
            <img src={burger} className="w-100 object-fit-contain" style={{ height: '450px' }} alt="burger" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Crousel;
