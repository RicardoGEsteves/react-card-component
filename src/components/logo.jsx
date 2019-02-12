import React from 'react';

const Logo = props => {
    return (
        <div className='logo__wrapper'>
            <div className='logo__container'>
                <p className='logo__text'>{props.logoText}</p>
            </div>
        </div>
    );
};

export default Logo;
