import React, { useEffect, useState } from 'react';
import "./Hero.css";
import img3 from "../../assets/img/img-3.jpg";


export default function Hero() {
   // Define a state variable 'windowWidth' and a function 'setWindowWidth' to update it
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
      // Define a function 'handleResize' that updates 'windowWidth' with the current inner window width
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
  
      // Attach event listener for window resize
      // Attach an event listener for the 'resize' event on the window that triggers 'handleResize' when the window is resized
      window.addEventListener('resize', handleResize);
  
      // Cleanup on component unmount
      // Cleanup function that removes the 'resize' event listener when the component unmounts to prevent memory leaks
      return () => {
        window.removeEventListener('resize', handleResize);
      };
      // The empty dependency array ensures that this effect runs once after the initial render
    }, []);

  return (
    <section 
      className={`content ${windowWidth < 768 ? 'mobile' : windowWidth < 1024 ?    'tablet' : 'desktop'}`}>
            <section class="hero-section">

              <div class="hero-img-container">
                  <img src={img3} alt="Beautiful outdoor hotel image" />
                  <div class="overlay"></div>
              </div>
              <center>
                <div class="hero-text-box">
                  <h1>
                      ENJOY YOUR STAY <br /> AT TEAM A'S HOTEL
                  </h1>
                  <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, 
                      <br /> iure ipsum excepturi debitis suscipit accusamus 
                  </p>
                </div>
              </center>
        </section>
    </section>
    
    
  )
}
