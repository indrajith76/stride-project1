import React from 'react';

const Banner = () => {
    return (
        <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/2bbcfa99737217.5ef9be3dbb9a9.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/2bbcfa99737217.5ef9be3dbb9a9.jpg" className="w-full hue-rotate-60" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/2bbcfa99737217.5ef9be3dbb9a9.jpg" className="w-full hue-rotate-180" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div> 
         
      </div>
    );
};

export default Banner;