import React, { Component } from 'react';
import Logo from './logo';
export default class LeftSide extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logoText: 'DEV'
        };
    }
    render() {
        return (
            <Logo logoText={this.state.logoText} />
        );
    }
}
