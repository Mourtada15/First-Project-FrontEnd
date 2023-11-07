import React, { useState } from 'react';
import { TweenLite } from 'gsap';
import './Slider.css';

const Slider = () => {
  const sliderItems = [
    {
      date: '30.07.2017',
      title: 'LOREM IPSUM DOLOR SITE MATE, AD EST ABHORREANT',
      text: 'Lorem ipsum dolor sit amet, ad est abhorreant efficiantur, vero oporteat apeirian in vel. Et appareat electram appellantur est. Ei nec duis invenire. Cu mel ipsum laoreet, per rebum omittam ex.',
      imageSrc: 'https://goranvrban.com/codepen/img2.jpg',
    },
    {
      date: '30.08.2017',
      title: 'LOREM IPSUM DOLOR SITE MATE, AD EST ABHORREANT',
      text: 'Lorem ipsum dolor sit amet, ad est abhorreant efficiantur, vero oporteat apeirian in vel. Et appareat electram appellantur est. Ei nec duis invenire. Cu mel ipsum laoreet, per rebum omittam ex.',
      imageSrc: 'https://goranvrban.com/codepen/img3.jpg',
    },
    {
      date: '30.09.2017',
      title: 'LOREM IPSUM DOLOR SITE MATE, AD EST ABHORREANT',
      text: 'Lorem ipsum dolor sit amet, ad est abhorreant efficiantur, vero oporteat apeirian in vel. Et appareat electram appellantur est. Ei nec duis invenire. Cu mel ipsum laoreet, per rebum omittam ex.',
      imageSrc: 'https://goranvrban.com/codepen/img5.jpg',
    },
    {
      date: '30.10.2017',
      title: 'LOREM IPSUM DOLOR SITE MATE, AD EST ABHORREANT',
      text: 'Lorem ipsum dolor sit amet, ad est abhorreant efficiantur, vero oporteat apeirian in vel. Et appareat electram appellantur est. Ei nec duis invenire. Cu mel ipsum laoreet, per rebum omittam ex.',
      imageSrc: 'https://goranvrban.com/codepen/img6.jpg',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextSlide = () => {
    const nextIndex = (currentIndex + 1) % sliderItems.length;
    transitionToSlide(nextIndex);
  };

  const handlePrevSlide = () => {
    const prevIndex = (currentIndex - 1 + sliderItems.length) % sliderItems.length;
    transitionToSlide(prevIndex);
  };

  const transitionToSlide = (nextIndex) => {
    // Animations can be added here if needed
    const sWrapper = document.querySelector('.slider-wrapper');
    const sWidth = document.querySelector('.slide').clientWidth;

    setCurrentIndex(nextIndex);

    TweenLite.to(sWrapper, 0.4, { x: `-${sWidth * nextIndex}px` });
  };

  return (
    <div className="slider">
      <div className="slider-wrapper flex">
        {sliderItems.map((item, index) => (
          <div
            key={index}
            className={`slide flex ${index === currentIndex ? 'active' : ''}`}
          >
            <div className="slide-image slider-link prev">
              <img src={item.imageSrc} alt="Slide" />
              <div className="overlay"></div>
            </div>
            <div className="slide-content">
              <div className="slide-date">{item.date}</div>
              <div className="slide-title">{item.title}</div>
              <div className="slide-text">{item.text}</div>
              <div className="slide-more">READ MORE</div>
            </div>
          </div>
        ))}
      </div>
      <div className="arrows">
        <button href="#" title="Previous" className="arrow slider-link prev" onClick={handlePrevSlide}>Previous</button>
        <button href="#" title="Next" className="arrow slider-link next" onClick={handleNextSlide}>Next</button>
      </div>
    </div>
  );
};

export default Slider;
