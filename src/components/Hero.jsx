import React from 'react';
import Logo from './Logo';

const Hero = props => {
    const {
        logoText,
        text,
        thumbnailAuthor,
        imgUrl,
        descriptionTitle,
        descriptionText,
        descriptionBtn
    } = props.hero;
    return (
        <div className='hero__wrapper'>
            <div className='hero__banner'>
                <Logo logoText={logoText} />{' '}
                <p className='banner__text'>{text}</p>
                <div className='thumbnail__wrapper'>
                    <div className='thumbnail__group'>
                        <p className='author'>{thumbnailAuthor}</p>
                        <img src={imgUrl} alt='thumbnail' />
                    </div>
                </div>
            </div>
            <div className='description__wrapper'>
                <p className='description__title'>{descriptionTitle} </p>
                <p className='description__text'>{descriptionText} </p>
                <button className='btn'> {descriptionBtn} </button>
            </div>
        </div>
    );
};

export default Hero;
