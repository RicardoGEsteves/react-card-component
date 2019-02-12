import React, { Component } from 'react';
import Header from './Header';
import Hero from './Hero';
import Icons from './Icons';
export default class RightSide extends Component {
    constructor(props) {
        super(props);
        this.state = {
            header: {
                title: 'The Other Dev',
                titleAt: '@TheOtherDev - Dec 11',
                text: 'Learning React? Start Small.',
                author: 'author: ',
                link: '@resteves',
                icon: 'fas fa-chevron-down'
            },
            hero: {
                logoText: 'DEV',
                text: 'Learning React? Start Small.',
                thumbnailAuthor: 'Ricardo Esteves',
                descriptionTitle: 'Learning React? Start Small.',
                descriptionText:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                descriptionBtn: 'dev.f4all',
                imgUrl: 'https://picsum.photos/50?image=669'
            },
            icons: {
                comments: 'far fa-comment',
                numberOfComments: 2,
                share: 'fas fa-retweet',
                numberOfShares: 47,
                likes: 'fas fa-heart',
                numberOfLikes: 190,
                contact: 'far fa-envelope'
            }
        };
    }
    render() {
        return (
            <div className='rightSide__wrapper'>
                <Header header={this.state.header} />
                <Hero hero={this.state.hero} />
                <Icons icons={this.state.icons} />
            </div>
        );
    }
}
