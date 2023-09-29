import React, { useEffect, useState } from 'react'
import img2 from "../../assets/img/img-2.jpg";
import "./About.css";


export default function About() {
     // Define a state variable 'windowWidth' and a function 'setWindowWidth' to update it
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        // Keeps track of the current window width and updates the windowWidth 
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
    <section className={`content ${windowWidth < 768 ? 'mobile' : windowWidth < 1024 ? 'tablet' : 'desktop'}`}>
        <section  class="about-box" >
        <div class="about-text-box">
            <h1>ABOUT</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In commodi impedit eos assumenda quia asperiores ut quas eius iusto, tempora ex, cum, non voluptatem libero quis vero. Fugiat, doloremque deleniti.</p> <br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit, Perspiciatis saepe obcaecati.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit, Perspiciatis saepe obcaecati.</p> <br />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi quo non autem ex eveniet minima harum dolorum reprehenderit praesentium veritatis quam, vero molestiae, accusantium molestias similique voluptatibus amet! Ex, adipisci?</p>

            <button> BOOK NOW</button>
            
        </div>
        
        <img src={img2} alt="About Us image" />
    </section>
    </section>
    
  )
}
