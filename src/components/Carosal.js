import React, { useState } from 'react';
import rect1 from '../assets/Rectangle 25 (1).png';
import rect2 from '../assets/Rectangle 24.png';
import rect3 from '../assets/Rectangle 26.png';
import '../components/carosal.css';

export default function Carosal() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleGoToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + 3) % 3);
  };

  const handleGoToNext = () => {
    console.log('asd');
    setCurrentIndex((prevIndex) => (prevIndex + 1) % 3);
    
  };

  const listItemsData = [
    {
      number: '01',
      title: 'Geospatial Modeling and Analysis',
      details:
        'Our platform leverages cutting-edge geospatial modeling and analysis techniques to process and extract insights from satellite image data. With advanced geospatial technology, we enable accurate and efficient processing of satellite imagery, allowing us to extract meaningful information and insights for various applications.',
    },
    {
      number: '02',
      title: 'Computer Vision for High-Resolution Satellite Images',
      details:
        'We utilize state-of-the-art computer vision techniques to extract features from high-resolution satellite images. Our advanced algorithms and image processing capabilities enable us to derive actionable insights from satellite imagery, including object detection, image classification, and change detection, among others.',
    },
    {
      number: '03',
      title: 'Machine Learning for Prediction and Model Training',
      details:
        'Our platform incorporates machine learning algorithms for prediction and model training. By leveraging machine learning techniques, we are able to train models using large datasets and historical satellite imagery, enabling us to generate accurate predictions and insights for decision-making in various domains such as Agriculture, Infrastructure, Defence, and Environment.',
    },
  ];

  return (
    <div className='containers'>
      <div className="carosal">

        <div className="carosal-holder lg:flex lg:gap-[15vw]">
          <div className="carosal-right flex-[1]">
            {listItemsData.map((item, index) => (
              <div key={index} className={`carosal-img ${currentIndex === index ? 'show' : ''}`}>
                <img src={index === 0 ? rect1 : index === 1 ? rect2 : rect3} alt="" />
              </div>
            ))}
          </div>
          <div className="carosal-left flex-[1] pt-[3vw]">
            {listItemsData.map((item, index) => (
              <div key={index} className={`carousal-text ${currentIndex === index ? 'show' : ''}`}>
                  <font className="carosal-index">{item.number}</font>
                  <font className="carosal-title">{item.title}</font>
                  <font className="carosal-details w-[90%]">{item.details}</font>
              </div>
            ))}
            <div className="slider-holder">
              <div className="slider" id="home-slider">
                <div onClick={handleGoToPrevious}>❰</div>
                <div onClick={handleGoToNext}>❱</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}