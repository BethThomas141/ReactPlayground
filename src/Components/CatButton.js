import React from 'react';


export class CatButton extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }


    handleClick() {
        document.getElementById('catdiv').innerHTML = '<p><img src="./catpic.jpg"></p>';
    }


    render() {
        return (
            <div>
                <button onClick={() => this.handleClick()}> Toggle cat </button>
                <div id={'catdiv'}></div>
            </div>
        )
    }

}