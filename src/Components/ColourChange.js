import React from 'react';
import { Button } from './Button.js';

export class ColourChange extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    randomColour() {
        const colourList = ['#8e9ae7', '#b26915', '#810d59', '#335d28', '#f396ff', '#64040f', '#1f4967', '#fffb64'];
        const index = Math.floor(Math.random()*8);
        return colourList[index];
    }
    handleClick() {
        document.body.style.background = this.randomColour();
    }


    render() {
        return (
            <div>
                <Button onClick={() => this.handleClick()}/>
            </div>
        )
    }

}