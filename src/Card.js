import React, { Component } from 'react';
import LeftSide from './components/LeftSide';
import RightSide from './components/RightSide';
import './styles/main.scss';

export default class Card extends Component {
    render() {
        return (
            <div className='card__wrapper'>
                <LeftSide className='leftSide' />
                <RightSide className='rightSide' />
            </div>
        );
    }
}
