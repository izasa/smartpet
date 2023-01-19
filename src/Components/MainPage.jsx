import React, { Component } from 'react';
import PetStore from './PetStore';

class MainPage extends Component {
    render() {
        return <div style={{ 'backgroundColor': '#ede7e7' }} >
            <PetStore />
        </div>

    }
}

export default MainPage;