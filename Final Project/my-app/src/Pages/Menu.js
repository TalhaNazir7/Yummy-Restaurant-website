
import React from 'react';
import Footer from '../Components/Footer';
const Menu = () => {
  return (
    
    <div className="text-center">
    <div>
      <h1>Our Menu</h1>
    </div>
    <h2 className='bg-success'>Explore Our Menu</h2><br/>
    
    
<div class="row">
  <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
    <img
      src="grid_image1.png"
      class="w-100 shadow-1-strong rounded mb-4"
      alt="food"
    />

    <img
      src="grid_image3.png"
      class="w-100 shadow-1-strong rounded mb-4"
      alt="food"
    />
  </div>

  <div class="col-lg-4 mb-4 mb-lg-0">
    <img
      src="grid_image3.png"
      class="w-100 shadow-1-strong rounded mb-4"
      alt="food"
    />

    <img
      src="grid_image4.png"
      class="w-100 shadow-1-strong rounded mb-4"
      alt="food"
    />
  </div>

  <div class="col-lg-4 mb-4 mb-lg-0">
    <img
      src="grid_image5.png"
      class="w-100 shadow-1-strong rounded mb-4"
      alt="food"
    />

    <img
      src="grid_image6.png"
      class="w-100 shadow-1-strong rounded mb-4"
      alt="food"
    />
  </div>
</div>
<Footer/>
  </div>
      
  );
};

export default Menu;
