import React from 'react'
import "./styles.css";
import img1 from "../assets/img/img-1.jpg";
import img2 from "../assets/img/img-2.jpg";
import img3 from "../assets/img/img-3.jpg";
import img4 from "../assets/img/img-4.jpg";
import img5 from "../assets/img/img-5.jpg";
import img6 from "../assets/img/img-6.jpg";

import room1 from "../assets/img/hotel-rooms/room-1.jpg";
import room2 from "../assets/img/hotel-rooms/room-2.jpg";
import room3 from "../assets/img/hotel-rooms/room-3.jpg";
import room4 from "../assets/img/hotel-rooms/room-4.jpg";
import room5 from "../assets/img/hotel-rooms/room-5.jpg";
import room6 from "../assets/img/hotel-rooms/room-6.jpg";
import room7 from "../assets/img/hotel-rooms/room-7.jpg";
import room8 from "../assets/img/hotel-rooms/room-8.jpg";
import Navbar from './NavBar/Navbar';
import Hero from './Hero-Section/Hero';
import About from './About-Section/About';

export default function Home() {
    
  return (
    <React.Fragment>
        <Navbar />
        <div>
        {/* Nav Bar */}
        {/* <nav class="nav-bar">
        <a class="logo" href="index.html">Hotel Logo</a>
        
        <ul class="nav-list">
            <li> <a class="nav-link" href="index.html"></a>Home </li>
            <li> <a class="nav-link" href="#"></a>About Us </li>
            <li> <a class="nav-link" href="#"></a>Contact Us </li>
            <li> <a class="nav-link" href="#"></a>Services </li>
        </ul>
        <button> BOOK NOW</button>
        </nav> */}
        {/* End Nav Bar */}

        <Hero />
        {/* Hero Section */}
        {/* <section class="hero-section">

        <div class="hero-img-container">
            <img src={img3} alt="Beautiful outdoor hotel image" />
            <div class="overlay"></div>
        </div>
        <div class="hero-text-box">
            <h1>
                ENJOY YOUR STAY <br /> AT TEAM A'S HOTEL
            </h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, 
                <br /> iure ipsum excepturi debitis suscipit accusamus 
            </p>
        </div>
        </section> */}
        {/* End Hero Section */}

        <About />
        {/* About Us Section */}
        {/* <section class="about-box" >
        <div class="about-text-box">
            <h1>ABOUT</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In commodi impedit eos assumenda quia asperiores ut quas eius iusto, tempora ex, cum, non voluptatem libero quis vero. Fugiat, doloremque deleniti.</p> <br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit, Perspiciatis saepe obcaecati.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit, Perspiciatis saepe obcaecati.</p> <br />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi quo non autem ex eveniet minima harum dolorum reprehenderit praesentium veritatis quam, vero molestiae, accusantium molestias similique voluptatibus amet! Ex, adipisci?</p>

            <button> BOOK NOW</button>
        </div>
        <img src={img2} alt="About Us image" />
        </section> */}
        {/* End About Us Section */}

        {/* Explore Our Room Section */}
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
        {/* End Explore Our Room Section */}

        {/* Interior Room Section */}
        <div class="interior-room-section-box">
            <div class="interior-room-img-box">
                <img src={room1} alt="" />
                <div class="interior-room-img-overlay"></div>
                <div class="interior-room-text-box">
                    <h1>INTERIOR</h1>
                    <p>Lorem ipsum dolor sit amet <br />   consectetur adipisicing elit. <br /> Illum laboriosam temporibus,</p>
                    <p>Lorem ipsum dolor sit amet <br />   consectetur adipisicing elit. <br /> Illum laboriosam temporibus,</p>
                    <p>Lorem ipsum dolor sit amet <br />   consectetur adipisicing elit. <br /> Illum laboriosam temporibus,</p>
                </div>
            </div>
            <div class="interior-room-write-up-box">
                <h1>ROOMS</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem voluptas unde sit</p>

                <br />
                <h1>AMENITIES</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, eum nostrum cumque ratione iusto</p>

                <button> BOOK NOW</button>
            </div>
        
        </div>
        {/* End Interior Room Section */}

        {/* Exterior Room Section */}
        <div class="exterior-box">
            <div class="exterior-write-up-box">
                <h1>SWIMMING POOL</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem voluptas unde sit</p>

                <br />
                <h1>TERRACE</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, eum nostrum cumque ratione iusto</p>

                <button> BOOK NOW</button>
            </div>
            <div class="exterior-img-box">
                <img src={room6} alt="" />
                <div class="exterior-img-overlay"></div>
                <div class="exterior-text-box">
                    <h1>EXTERIOR</h1>
                    <p>Lorem ipsum dolor sit amet <br />   consectetur adipisicing elit. <br /> Illum laboriosam temporibus,</p>
                    <p>Lorem ipsum dolor sit amet <br />   consectetur adipisicing elit. <br /> Illum laboriosam temporibus,</p>
                    <p>Lorem ipsum dolor sit amet <br />   consectetur adipisicing elit. <br /> Illum laboriosam temporibus,</p>
                </div>
            </div>
        </div>
        {/* End Exterior Room Section */}
    </div>
    </React.Fragment>
    
  )
}

