import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';


class App extends React.Component {
    state= {lat: null, errorMessage: '' };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat: position.coords.latitude}),
            err => this.setState({errorMessage: err.message})
        );
    };

    renderContent() {
        if(this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>;
        }
        
        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />;
        }
        return <Spinner  message="Please Accept Location Request!" />;
    };
// moving logic to renderContent and adding that div into render lets that compoent be abstracted and keep the ability to have a red border no matter what... even though we didn do the css for it.

    render() {
        return (
            <div className='border red'>
                {this.renderContent()}
            </div>
        );
    };
};  

ReactDOM.render( 
    <App/>,
    document.querySelector('#root')
);