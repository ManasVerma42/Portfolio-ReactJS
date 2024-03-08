import React, { useState } from 'react';
import './ScrollToTopButton.css';
import image from './up-arrow.png';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  window.addEventListener('scroll', handleScroll);

  return (
    <div>
      {isVisible && (
        <div className="scroll-to-top-button" onClick={scrollToTop}>
          <img src={image} alt='up' />
        </div>
      )}
    </div>
  );
};

export default ScrollToTopButton;
