import React from 'react';


export class CatButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {On: false}
        this.handleClick = this.handleClick.bind(this);
    }


    handleClick() {
        if (this.state.On) {
            this.setState({On: false});
            document.getElementById('catdiv').innerHTML = '';
        }
        else {
            this.setState({On: true});
            document.getElementById('catdiv').innerHTML = '<p><img src="https://petcostumecenter.com/wp-content/uploads/2020/05/straw-sombrero-pet-hat--scaled.jpg" width="200" height="200"></p>';
        }

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