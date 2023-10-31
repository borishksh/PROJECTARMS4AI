import React from 'react';

const ProductStatItem = ({ imageSrc, number, title, description }) => {
  return (
    <div className="flex">
      <img src={imageSrc} alt="arms4ai" className="w-[40px] h-[40px] lg:w-[3vw] lg:h-[3vw]" />
      <div className='pl-[10px]'>
        <h4 className="font-extrabold text-[20px] lg:text-[1.9vw] stroke-text montserrat">{number}</h4>
        <h5 className="text-black text-[12px] lg:text-[0.77vw] tracking-wide rozha">{title}</h5>
        <p className="text-black text-[12px] lg:text-[0.8vw] pt-[10px] leading-tight">{description}</p>
      </div>
    </div>
  );
};

export default ProductStatItem;