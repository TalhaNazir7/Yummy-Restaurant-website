
import React from 'react';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className="vh-100 vw-50"  style={{ backgroundImage: "url('./bg.jpg')" }}> 
      <div className="text-white  d-flex justify-content-center  vh-100 align-item-center text-center  p-5">
        <article className='w-50 h-50 bg-black opacity-50'>
          <h1>Welcome to Yummy!</h1>
          <p>
            <br />
            We are a family-owned restaurant that has <br />
            been serving delicious food and drinksfa-border since 1995. <br />
            Our menu features a variety of dishes that are made from fresh, locally sourced <br />
            ingredients. We pride ourselves on providing excellent <br />
            customer service and creating a welcoming atmosphere for our guests.
          </p>
          <br />
          <Link to='/registration'>
          <button type="button" class="btn btn-danger">Order Now</button>
            </Link>
        </article>
      </div>
      <br />
      <div className="container">
        <div className="d-flex justify-content-between">
          <div className="hero_image">
            <img src="hero_image.png" className='w-50' alt="hero" />
          </div>
          <div className="hero_content">
            <div className="tag">50% Off on All Products</div>
            <h1>Enjoy Your Delicious Food</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptates, iste corporis tempore necessitatibus inventore ex?
            </p>
            <button type="button" class="btn btn-warning">Explore Now</button>
          </div>
        </div>
        <section className="d-flex justify-content-between mb-5">
          <div className="feature">
            <img src="discount.png" alt="" />
            <div className="feature_content">
              <h3>Discount Voucher</h3>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </div>
          </div>
          <div className="feature">
            <img src="fresh.png" alt="" />
            <div className="feature_content">
              <h3>Fresh Healthy Food</h3>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </div>
          </div>
          <div className="feature">
            <img src="delivery.png" alt="" />
            <div className="feature_content">
              <h3>Fast Home Delivery</h3>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </div>
          </div>
        </section>
        <div className="divider"></div>
      </div>
      <Footer/>
    </div>
  );
};
export default Home;