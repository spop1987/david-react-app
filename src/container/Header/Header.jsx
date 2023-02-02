import React from 'react';

import './Header.css';

import { SubHeading } from '../../components';
import { fotosHeader } from '../../constants';

const Header = () => {
  return(
    <div className='app__header app__wrapper section__padding' id='home'>
      <div className='app__wrapper_info'>
        <SubHeading title="Chase the new way of making pasta"/>
        <h1 className='app__header-h1'>The art eatable...</h1>
        <p className="p__opensans" > dsnds dsgfndsgdsn gds gnjksfd bksjd gcjskgkfajsdhgfnjbhng ghnfjabnfjdkçlanbfjdkabn</p>
        <a href="#gallery" type='button' className='custom__button'>Explore our catalog</a>
      </div>

      <div className='app__wrapper_img'>
        <img src={fotosHeader.foto4} alt="header img" />
      </div>
    </div>
  );
};

export default Header;