import React from 'react';

const Header = props => {
    const { title, titleAt, icon, text, author, link } = props.header;
    return (
        <div className='header__wrapper'>
            <div className='firstRow'>
                <div className='titles__container'>
                    <p className='title'> {title} </p>
                    <button className='btn'> {titleAt} </button>
                </div>
                <button className='btn'>
                    <i className={icon} />
                </button>
            </div>
            <p className='text'> {text} </p>
            <p className='author'>
                {'{'} {author}
                <a href='#' className='author__link'>
                    {link}
                </a>{' '}
                {'}'}
            </p>
        </div>
    );
};

export default Header;
