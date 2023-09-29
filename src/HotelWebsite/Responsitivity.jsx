import React, { useEffect, useState } from 'react'

export default function Responsitivity() {
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
    <div>

    </div>
  )
}
