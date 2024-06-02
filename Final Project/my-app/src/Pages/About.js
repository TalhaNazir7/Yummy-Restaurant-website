
import React from 'react';
import Footer from '../Components/Footer';
const About = () => {
    return (
      <div>
  
        <center>
          <h1 style={{ color: 'green' }}>Yummy!</h1>
          <h3>About Us</h3>
          <p>
            <video width="850" height="500" controls preload="auto">
              <source
                src="https://media.geeksforgeeks.org/wp-content/uploads/20190616234019/Canvas.move_.mp4"
                type="video/mp4"
              />
              <source
                src="https://media.geeksforgeeks.org/wp-content/uploads/20190616234019/Canvas.move_.ogg"
                type="video/ogg"
              />
            </video>
          </p>
        </center>
        <Footer/>
      </div>
    );
  };
  
  export default About;
  