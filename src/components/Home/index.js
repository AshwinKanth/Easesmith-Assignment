import React, { useState } from "react";
import Header from "../Header"
import Nursary from "../Nursary";
import Products from "../Products";
import Footer from "../Footer";

import "./index.css"


const Home = () => {
    const [active, setActive] = useState('');
    const [activeButton, setActiveButton] = useState('');


    const handleActive = (linkName) => {
        setActive(linkName);
    }
    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    };


    return (
        <>
            <Header />
            <div className='buttonscontainer'>
                <button
                    className={`plant ${activeButton === 'plants' ? 'active' : ''}`}
                    onClick={() => handleButtonClick('plants')}
                >
                    Plants
                </button>
                <button
                    className={`plant ${activeButton === 'tools' ? 'active' : ''}`}
                    onClick={() => handleButtonClick('tools')}
                >
                    Tools
                </button>
            </div>
            <div>
                <h1 className='text'>Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut necessitatibus enim ut internos accusantium a numquam autem ab rerum omnis. Non molestiae ratione et laborum doloribus aut molestiae voluptates ut porro excepturi sit molestiae obcaecati qui quis beatae est voluptatem eius. Et architecto nihil id labore omnis hic iste deleniti et porro aspernatur.</h1>
            </div>
            <div className='Nursary'>
                <Nursary />
            </div>
            <div className='Nursary'>
                <Products />
            </div>
            <div className='viemore'>
                <button className='buttonview'>View More</button>
            </div>
            <div className='Nursary'>
                <Footer />
            </div>
        </>
    )
}


export default Home