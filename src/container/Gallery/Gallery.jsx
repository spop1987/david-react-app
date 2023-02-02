import React from 'react';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import { SubHeading } from '../../components';
import { dataPasta } from '../../constants';
import './Gallery.css';

const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  const pastaInfosArray = [];
  dataPasta.pastaInfos.forEach(element => {
    pastaInfosArray.push(element);
  });

  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading id="gallery" title="Special edition pasta" />
        <h1 className="headtext__cormorant">Our Special Pasta Catalog</h1>
        <p className="p__opensans" style={{ color: '#AAAAAA', marginTop: '2rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {pastaInfosArray.map((image, index) => (
            <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
              <img src={image.imgUrl} alt="gallery_image" />
              <div className="gallery__image-icon">
                  <div>
                      <h1>{image.title}</h1>
                      <p>{image.price}</p>
                  </div>
              </div>
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
          <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;