import React from 'react'
import teaImg from '../assets/static/tea.jpg'

const CafeInfo = () => {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        {/* Left Side: Description */}
        <div className="col-md-6">
          <h2 style={{color:"darkorange"}} className='fs-1'>Indian Rock Cafe</h2>
          <p className='fs-5'>
            Authentic Italian cuisine served with an Indian soul.<br />
            Dive into flavors, from creamy pastas to wood-fired pizzas.
          </p>
        </div>

        {/* Right Side: Image */}
        <div className="col-md-6">
          <img
            src={teaImg}
            alt="Italian Dish"
            className="img-fluid rounded shadow"
          />
        </div>
      </div>
    </div>
  )
}

export default CafeInfo