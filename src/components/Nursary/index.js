import React, { useRef } from 'react';

import { ChevronRight } from 'lucide-react';
import { ChevronLeft } from 'lucide-react';

import './index.css';

const Nursary = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <div className="nursary-container">
      <h1>Nursary</h1>

      <button className="arrow left-arrow" onClick={scrollLeft}>
       <ChevronLeft/>
      </button>
      
      <div className="nursary-images-container" ref={scrollRef}>
        <div className="nursary-item">
          <img src='https://res.cloudinary.com/dlngyh6jo/image/upload/v1729335179/Ellipse_68_rcmohj.png' alt="Nursary 1" />
          <p className='text'>Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum   </p>
        </div>
        <div className="nursary-item">
          <img src='https://res.cloudinary.com/dlngyh6jo/image/upload/v1729335160/Ellipse_69_cxv3yd.png' alt="Nursary 2" />
          <p>Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum   </p>
        </div>
        <div className="nursary-item">
          <img src='https://res.cloudinary.com/dlngyh6jo/image/upload/v1729335142/Ellipse_70_tmwe8j.png' alt="Nursary 3" />
          <p>Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum   </p>
        </div>
        <div className="nursary-item">
          <img src='https://res.cloudinary.com/dlngyh6jo/image/upload/v1729335126/Ellipse_71_j0hbmh.png' alt="Nursary 4" />
          <p>Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum   </p>
        </div>
        <div className="nursary-item">
          <img src='https://res.cloudinary.com/dlngyh6jo/image/upload/v1729335179/Ellipse_68_rcmohj.png' alt="Nursary 1" />
          <p>Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum   </p>
        </div>
        <div className="nursary-item">
          <img src='https://res.cloudinary.com/dlngyh6jo/image/upload/v1729335160/Ellipse_69_cxv3yd.png' alt="Nursary 2" />
          <p>Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum   </p>
        </div>
        <div className="nursary-item">
          <img src='https://res.cloudinary.com/dlngyh6jo/image/upload/v1729335142/Ellipse_70_tmwe8j.png' alt="Nursary 3" />
          <p>Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum   </p>
        </div>
        <div className="nursary-item">
          <img src='https://res.cloudinary.com/dlngyh6jo/image/upload/v1729335126/Ellipse_71_j0hbmh.png' alt="Nursary 4" />
          <p>Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum   </p>
        </div>
      </div>

      <button className="arrow right-arrow" onClick={scrollRight}>
        <ChevronRight/>
      </button>
    </div>
  );
};

export default Nursary;