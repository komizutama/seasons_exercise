import React from 'react';
import ReactDOM from 'react-dom';



class App extends React.Component {
    constructor (props) {
        super(props);

        //The initial declaration is the only time we directly declare state
        this.state={lat: null };

        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({lat: position.coords.latitude});
            },//updates the state
            (err) => console.log(err)
        );
    };

    render() {
        return <div>latitude: {this.state.lat}</div>;
    }
}

ReactDOM.render( 
    <App/>,
    document.querySelector('#root')
);