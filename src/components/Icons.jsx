import React from 'react';

const Icons = props => {
    const {
        comments,
        numberOfComments,
        share,
        numberOfShares,
        likes,
        numberOfLikes,
        contact
    } = props.icons;
    return (
        <ul className='icons__wrapper'>
            <li className='icon__list__group'>
                <button className='btn comments' href='#'>
                    <i className={comments} />
                </button>
                <span className='number__comments'>{numberOfComments} </span>
            </li>
            <li className='icon__list__group'>
                <button className='btn share' href='#'>
                    <i className={share} />
                </button>
                <span className='number__shares'>{numberOfShares}</span>
            </li>
            <li className='icon__list__group'>
                <button className='btn likes' href='#'>
                    <i className={likes} />
                </button>
                <span className='number__likes'>{numberOfLikes}</span>
            </li>
            <li className='icon__list__group'>
                <button className='btn contact' href='#'>
                    <i className={contact} />
                </button>
            </li>
        </ul>
    );
};

export default Icons;
