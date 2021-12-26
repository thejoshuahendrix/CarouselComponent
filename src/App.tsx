import React from 'react';
import Slider from 'react-slick';
import pic1 from './assets/binary.png';
import pic2 from './assets/Capture.png';
import pic3 from './assets/Clip_M1-SKS.jpg';
import pic4 from './assets/dbuglog.png';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './App.css';
import { useState } from 'react';
import Card from './components/Card';


const images = [pic1, pic2, pic3, pic4];
const cards = [<Card />, <Card />, <Card />, <Card />]


function App() {
  const NextArrow = ({ onClick }: any) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }: any) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [ImageIndex, setImageIndex] = useState(0)
  const settings = {
    infinite: true,
    lazyload: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: "0px",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current: any, next: any) => setImageIndex(next)
  }
  return (
    <div className="App">
      <Slider {...settings}>
        {cards.map((card, i) => {
          return (
            <div className={i === ImageIndex ? 'slide activeSlide' : 'slide'}>
              {card}
            </div>
          )
        })}
      </Slider>
    </div>
  );
}

export default App;
