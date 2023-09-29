import React, { useState } from 'react'
import room3 from "../../assets/img/hotel-rooms/room-3.jpg";
import room4 from "../../assets/img/hotel-rooms/room-4.jpg";
import room5 from "../../assets/img/hotel-rooms/room-5.jpg";
import room6 from "../../assets/img/hotel-rooms/room-6.jpg";
import room7 from "../../assets/img/hotel-rooms/room-7.jpg";
import room8 from "../../assets/img/hotel-rooms/room-8.jpg";



export default function ExploreOurRoom() {
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
    <section>
        <h1 class="explore-h1">EXPLORE OUR ROOMS</h1>
        <section class="explore-box">
            <img src={room5} alt="Room 5 image" />
            <div class="explore-img-div">
                <img src={room3} alt="Room 3 image" />
                <img src={room6} alt="Room 6 image" />
            </div>
            <img src={room7} alt="Room 7 image" />
            <img src={room8} alt="Room 8 image" />
            <img src={room4} alt="Room 4 image" />
        </section>
    </section>
  )
}
